import React, { Component, Fragment } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  handleToggle = () => {
    this.setState({
      show: this.state.show ? false : true,
    });
  };
  render() {
    return (
      <Fragment>
        <div className={this.state.show ? "show" : "hide"}>hello, man</div>

        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    );
  }
}

export default App;
