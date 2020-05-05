import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1 ml-5">Simple To Do List</span>
        <span>
          <span className="badge badge-success badge-pill mr-1">
            Done: {this.props.done}
          </span>
          <span className="badge badge-danger badge-pill">
            Pending: {this.props.pending}
          </span>
        </span>
      </nav>
    );
  }
}

export default NavBar;
