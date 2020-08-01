import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  /*  constructor(props) {
    super(props);
    //this.handleChirldClickItem = this.handleChirldClickItem.bind(this);
  } */

  //当一个组件从父组件接受参数
  //如果这个组件第一次存在于父组件中，不会被执行
  //如果这个组件之前已经存在于父组件中，才会被执行
  // componentWillReceiveProps() {
  //   console.log("child componentWillReceiveProps");
  // }

  // //当这个组件即将被从页面中剔除的时候，会被执行
  // componentWillUnmount() {
  //   console.log("child componentWillUnmount");
  // }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.contentItem !== this.props.contentItem) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log("child item");
    const { contentItem } = this.props;
    return (
      <li onClick={this.handleChirldClickItem}>
        <div>{contentItem}</div>
      </li>
    );
  }
  handleChirldClickItem = () => {
    const { handleClickItem, Index } = this.props;
    handleClickItem(Index);
  };
}

TodoItem.propTypes = {
  contentItem: PropTypes.string,
  handleClickItem: PropTypes.func,
  Index: PropTypes.number,
};

export default TodoItem;
