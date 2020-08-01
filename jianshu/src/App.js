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
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          appear={true}
          onEnter={(ele) => (ele.style.color = "pink")}
        >
          <div>hello, man</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    );
  }
}

export default App;
