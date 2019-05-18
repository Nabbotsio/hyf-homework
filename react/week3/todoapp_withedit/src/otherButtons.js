import React, { Component } from "react";

class Otherbuttons extends Component {
  render() {
    const {
      deletAllTodos,
      checkAllTodos,
      todoArray,
      unCheckAllTodos
    } = this.props;
    const filteredTodoArray = todoArray.filter(task => task.done === false);
    const filteredTodoArrayLength = filteredTodoArray.length;
    const buttonText =
      filteredTodoArrayLength === 0 ? "Uncheck All" : "Check All"; // changes the Check All  button to Uncheck All and vice versa.  The onclick fxn below choses the appropiate method to run for either Check All or Uncheck All

    return (
      <div>
        <button
          id="checkAll"
          onClick={
            filteredTodoArrayLength === 0
              ? () => unCheckAllTodos()
              : () => checkAllTodos()
          }
        >
          {buttonText}
        </button>
        <button id="deletAll" onClick={() => deletAllTodos()}>
          Delete All
        </button>
      </div>
    );
  }
}

export default Otherbuttons;
