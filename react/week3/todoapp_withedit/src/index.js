import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import List from "./list";
import Todoinput from "./InputTodo";

class App extends Component {
  state = {
    todoArray: [
      {
        id: 1,
        description: "Get out of bed",
        done: true
      },
      {
        id: 2,
        description: "Brush teeth",
        done: false
      },
      {
        id: 3,
        description: "Eat breakfast",
        done: false
      }
    ],
    isEditButton: true
  };

  // function
  addTodoTask = todo => {
    const newTodoTask = {
      id: this.state.todoArray.length + 1,
      description: todo,
      done: false
    };

    const newTodoArray = this.state.todoArray.concat(newTodoTask);
    this.setState({ todoArray: newTodoArray }, () =>
      console.log("added", this.state.todoArray)
    );
  };

  deletTodoTask = id => {
    const filteredTodoArray = this.state.todoArray.filter(
      task => task.id !== id
    );
    this.setState({ todoArray: filteredTodoArray }, () =>
      console.log("filtered", this.state.todoArray)
    );
  };

  toggleTodoTask = id => {
    const newTodoArray = this.state.todoArray.map(task => {
      if (task.id === id) {
        task.done = !task.done;
        return task;
      } else return task;
    });
    this.setState({ todoArray: newTodoArray }, () =>
      console.log("check", this.state.todoArray)
    );
  };

  deletAllTodos = () => {
    const newTodoArray = [];
    this.setState({ todoArray: newTodoArray });
  };

  checkAllTodos = () => {
    const newTodoArray = this.state.todoArray.map(task => {
      task.done = true;
      return task;
    });

    this.setState({ todoArray: newTodoArray });
  };

  unCheckAllTodos = () => {
    const newTodoArray = this.state.todoArray.map(task => {
      task.done = false;
      return task;
    });

    this.setState({ todoArray: newTodoArray });
  };

  editTodo = (id, editedDescibtion) => {
    const newTodoArray = this.state.todoArray.map(task => {
      if (task.id === id) {
        task.description = editedDescibtion;
        return task;
      } else return task;
    });
    this.setState({ todoArray: newTodoArray }, () =>
      console.log("check", this.state.todoArray)
    );
  };

  toggleEditButton = () => {
    const newisEditButton = !this.state.isEditButton;
    this.setState({ isEditButton: newisEditButton });
  };

  render() {
    return (
      <div>
        <h1 id="pageHead">Marcel's Todo List</h1>
        <div>
          <Todoinput addTodoTask={this.addTodoTask} />
        </div>
        <div />

        <List
          todoArray={this.state.todoArray}
          deletTodoTask={this.deletTodoTask}
          toggleTodoTask={this.toggleTodoTask}
          deletAllTodos={this.deletAllTodos}
          checkAllTodos={this.checkAllTodos}
          unCheckAllTodos={this.unCheckAllTodos}
          editTodo={this.editTodo}
          isEditButton={this.state.isEditButton}
          toggleEditButton={this.toggleEditButton}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
