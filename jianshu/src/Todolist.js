import React, { Component } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Input, Button, List } from "antd";
import store from "./store";
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
} from "./store/actionType";
const data = [];
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
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: event.target.value,
    };

    store.dispatch(action);
  };

  hanldeBtnClick = () => {
    const action = {
      type: ADD_TODO_ITEM,
    };
    store.dispatch(action);
  };
  handleItemClick = (index) => {
    const action = {
      type: DELETE_TODO_ITEM,
      index: index,
    };
    store.dispatch(action);
  };
  render() {
    return (
      <div>
        <div style={{ marginTop: "10px", marginLeft: "10px" }}>
          <Input
            placeholder="todo information"
            style={{ width: 300, marginRight: "10px" }}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.hanldeBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px", marginLeft: "10px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemClick.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Todolist;
