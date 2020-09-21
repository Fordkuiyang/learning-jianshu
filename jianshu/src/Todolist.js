import React, { Component } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodolist,
} from "./store/actionCreators";

import TodoListUI from "./TodoListUI";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }
  handleStoreChange = () => {
    this.setState(store.getState());
  };
  handleInputChange = (event) => {
    const action = getInputChangeAction(event.target.value);
    store.dispatch(action);
  };

  hanldeBtnClick = () => {
    const action = getAddItemAction();
    store.dispatch(action);
  };
  handleItemClick = (index) => {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  };

  componentDidMount() {
    const action = getTodolist();
    store.dispatch(action);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        hanldeBtnClick={this.hanldeBtnClick}
        list={this.state.list}
        handleItemClick={this.handleItemClick}
      ></TodoListUI>
    );
  }
}

export default Todolist;
