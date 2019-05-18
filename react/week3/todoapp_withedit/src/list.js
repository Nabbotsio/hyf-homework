import React, { Component } from "react";

import Otherbuttons from "./otherButtons";

class List extends Component {
  render() {
    const {
      todoArray,
      deletTodoTask,
      toggleTodoTask,
      deletAllTodos,
      checkAllTodos,
      unCheckAllTodos,
      isEditButton,
      toggleEditButton,
      //editTodo
    } = this.props;

    console.log("1", isEditButton);

    //const saveButton=()=> {isEditButton=false; console.log("2", isEditButton)}
    //saveButton()

    console.log("3", isEditButton);

    return (
      <div>
        <ol>
          {todoArray.length > 0 ? (
            todoArray.map(task => (
              <li key={task.id}>
                <input
                  type="checkbox"
                  id="todocheck"
                  checked={task.done}
                  onChange={() => toggleTodoTask(task.id)}
                />
                {isEditButton ? (
                  <span id={task.done ? "todoText" : ""}>
                    {task.description}
                  </span>
                ) : (
                  <input type="text" value={task.description} />
                )}
                <button id="editButton" onClick={() => toggleEditButton()}>
                  {isEditButton ? "Edit" : "Save"}
                </button>

                <button id="deletButton" onClick={() => deletTodoTask(task.id)}>
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p>Todo list is empty</p>
          )}
        </ol>
        <div id="buttonsDiv">
          <Otherbuttons
            deletAllTodos={deletAllTodos}
            checkAllTodos={checkAllTodos}
            todoArray={todoArray}
            unCheckAllTodos={unCheckAllTodos}
          />
        </div>
      </div>
    );
  }
}

export default List;
