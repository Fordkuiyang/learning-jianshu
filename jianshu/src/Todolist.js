import React, { Component } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Input, Button, List } from "antd";
import store from "./store";
const data = [];
class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  render() {
    return (
      <div>
        <div style={{ marginTop: "10px", marginLeft: "10px" }}>
          <Input
            placeholder="todo infor"
            style={{ width: 300, marginRight: "10px" }}
            value={this.state.inputValue}
          />
          <Button type="primary">提交</Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px", marginLeft: "10px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}

export default Todolist;
