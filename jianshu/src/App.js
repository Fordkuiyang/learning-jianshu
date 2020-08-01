import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  handleToggle = () => {
    this.setState({
      show: this.state.show ? false : true,
    });
  };
  handleAddItem = () => {
    this.setState((preState) => ({
      list: [...preState.list, "item"],
    }));
  };
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                timeout={1000}
                classNames="fade"
                unmountOnExit
                onEnter={(ele) => {
                  ele.style.color = "blue";
                }}
                appear={true}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>

        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    );
  }
}

export default App;
