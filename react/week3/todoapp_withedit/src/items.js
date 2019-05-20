import React, { Component } from "react";

class Item extends Component {
  state = {
    inputValue: "",
    isEditButton: true
  };

  toggleEditButton = () => {
    const newisEditButton = !this.state.isEditButton;
    this.setState({ isEditButton: newisEditButton });
  };

  updateTodo = e => {
    const updatedTodo = e.target.value;
    console.log("update", updatedTodo);
    this.setState({ inputValue: updatedTodo });
  };

  render() {
    const { deletTodoTask, toggleTodoTask, task, editTodo } = this.props;

    const isEditButton = this.state.isEditButton;
    const inputValue = this.state.inputValue;

    return (
      <div>
        <li key={task.id}>
          <input
            type="checkbox"
            id="todocheck"
            checked={task.done}
            onChange={() => toggleTodoTask(task.id)}
          />
          {isEditButton ? (
            <span id={task.done ? "todoText" : ""}>{task.description}</span>
          ) : (
            <input defaultValue={task.description} onChange={this.updateTodo} />
          )}
          <button
            id="editButton"
            onClick={() =>
              isEditButton
                ? this.toggleEditButton()
                : (editTodo(task.id, inputValue), this.toggleEditButton())
            }
          >
            {isEditButton ? "Edit" : "Save"}
          </button>

          <button id="deletButton" onClick={() => deletTodoTask(task.id)}>
            Delete
          </button>
        </li>
      </div>
    );
  }
}

export default Item;
