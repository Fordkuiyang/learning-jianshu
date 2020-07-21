import React, { Component } from "react";

class TodoItem extends Component {
  /*  constructor(props) {
    super(props);
    //this.handleChirldClickItem = this.handleChirldClickItem.bind(this);
  } */

  render() {
    const { contentItem } = this.props;
    return <li onClick={this.handleChirldClickItem}>{contentItem}</li>;
  }
  handleChirldClickItem = () => {
    const { handleClickItem, Index } = this.props;
    handleClickItem(Index);
  };
}

export default TodoItem;
