import React, { Component, Fragment } from "react";
import "./style.css";
import TodoItem from "./TodoItem";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
    /*  this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickBtn = this.handleClickBtn.bind(this); */
  }
  handleInputChange = (e) => {
    const value = e.target.value;
    // this.setState是一个异步函数，会有回调函数
    this.setState(() => ({
      inputValue: value,
    }));
  };

  handleClickBtn = () => {
    this.setState((preState) => ({
      list: [...preState.list, preState.inputValue],
      inputValue: "",
    }));
  };

  handleClickItem = (index) => {
    this.setState((preState) => {
      const newList = [...preState.list];
      newList.splice(index, 1);
      return { list: newList };
    });
  };

  componentDidMount() {
    axios
      .get("/api/todolist")
      .then((res) => {
        console.log(res.data);
        this.setState(() =>({
          list: [ ...res.data]
        }))
      })
      .catch((err) => {
        console.log("error");
      });
  }

  getTodoItem = () => {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          contentItem={item}
          Index={index}
          handleClickItem={this.handleClickItem}
          key={index}
        ></TodoItem>
      );
    });
  };
  // //徐建即将被挂在到页面之前，自动执行
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }

  // // 组件被挂在到页面之后，自动执行
  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  // // 组件被更新之前，他会自动被执行
  // shouldComponentUpdate() {
  //   console.log("shouldComponentUpdate");
  //   return true;
  // }
  // // 组件被更新之前，它会自动执行，但是他在shouldCompoent之后被执行
  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  //   return false;
  // }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleClickBtn}>Submit</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
