import React, { Component } from "react";
import NavBar from "./navbar";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todos: [...this.props.todos],
    };
    console.log(this.state.todos);
  }

  handleChange = (e) => {
    const input = e.target.value;
    this.setState({
      input,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.input);
    if (this.state.input.length > 0) {
      const todos = this.state.todos;
      this.setState({
        input: "",
        todos: [
          ...todos,
          {
            description: this.state.input,
            selected: false,
          },
        ],
      });
    }
  };

  handleCheck = (id) => {
    const todos = this.state.todos;
    todos[id].selected = !todos[id].selected;
    this.setState({
      input: "",
      todos: [...todos],
    });
  };

  handleDelete = (id) => {
    const todos = this.state.todos;
    todos.splice(id, 1);
    this.setState({
      todos,
    });
  };

  handleUncheckAll = () => {
    const todos = this.state.todos;
    const newTodos = todos.map((item) => {
      item.selected = false;
      return item;
    });
    this.setState({
      todos: newTodos,
    });
  };

  handleCheckAll = () => {
    const todos = this.state.todos;
    const newTodos = todos.map((item) => {
      item.selected = true;
      return item;
    });
    this.setState({
      todos: newTodos,
    });
  };

  handleDeleteAll = () => {
    const todos = [];
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          done={
            this.state.todos.filter((item) => item.selected === true).length
          }
          pending={
            this.state.todos.filter((item) => item.selected === false).length
          }
        />
        <div className="container mt-5">
          <div className="btn-group">
            <button className="btn btn-warning" onClick={this.handleUncheckAll}>
              Uncheck All
            </button>
            <button className="btn btn-primary" onClick={this.handleCheckAll}>
              Check All
            </button>
            <button className="btn btn-danger" onClick={this.handleDeleteAll}>
              Delete All
            </button>
          </div>
          <form
            className="form-inline float-right mr-2 mb-2"
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              placeholder="Enter new to do"
              onChange={this.handleChange}
              value={this.state.input}
            />
            <button
              className="btn btn-warning btn-md text-white mx-1"
              type="submit"
            >
              Add
            </button>
          </form>
          <table className="table table-bordered table-striped text-center">
            <thead>
              <tr>
                <th></th>
                <th>To Do</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.length > 0 ? (
                this.state.todos.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="form-control"
                        onChange={() => this.handleCheck(index)}
                        checked={item.selected}
                      />
                    </td>
                    <td>
                      <span
                        style={
                          item.selected
                            ? { textDecoration: "line-through" }
                            : {}
                        }
                      >
                        {item.description}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="text-center" colSpan="3">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <p>{this.state.input}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Container;
