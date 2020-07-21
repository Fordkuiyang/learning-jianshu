import React, { Component, Fragment } from "react";
import "./style.css";
import TodoItem from "./TodoItem";

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
