import React, { Component } from "react";
import "./App.css";
import Container from "./components/container";

class App extends Component {
  state = {
    todos: [
      {
        description: "This is a sample description",
        selected: true,
      },
      {
        description: "This is a sample description",
        selected: false,
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container todos={this.state.todos} />
      </React.Fragment>
    );
  }
}
export default App;
