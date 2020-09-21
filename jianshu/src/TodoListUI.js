import React from "react";
import { Input, Button, List } from "antd";

const TodoListUI = (props) => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <div>
        <Input
          placeholder="todo information"
          style={{ width: 300, marginRight: "10px" }}
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.hanldeBtnClick}>
          提交
        </Button>
      </div>
      <List
        style={{ marginTop: "10px", width: "300px", marginLeft: "10px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={(index) => props.handleItemClick(index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

/* class TodoListUI extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input
            placeholder="todo information"
            style={{ width: 300, marginRight: "10px" }}
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.hanldeBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px", marginLeft: "10px" }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={(index) => this.props.handleItemClick(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
} */

export default TodoListUI;
