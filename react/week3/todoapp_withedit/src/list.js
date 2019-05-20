import React, { Component } from "react";

import Otherbuttons from "./otherButtons";

import Item from "./items";

class List extends Component {
  render() {
    const {
      todoArray,
      deletTodoTask,
      toggleTodoTask,
      deletAllTodos,
      checkAllTodos,
      unCheckAllTodos,
      editTodo
    } = this.props;

    return (
      <div>
        <div>
          <ol>
            {todoArray.length > 0 ? (
              todoArray.map(task => (
                <Item
                  task={task}
                  todoArray={todoArray}
                  deletTodoTask={deletTodoTask}
                  toggleTodoTask={toggleTodoTask}
                  editTodo={editTodo}
                />
              ))
            ) : (
              <p>Todo list is empty</p>
            )}
          </ol>
        </div>

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
