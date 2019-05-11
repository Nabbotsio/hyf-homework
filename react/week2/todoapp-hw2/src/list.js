import React, {Component} from "react";

class List extends Component {

  
  
  render() {
    const { todoArray } = this.props;
    return (
      <div>
        <ol>
          {todoArray.length > 0 ? (
            todoArray.map(task => ( 
            <li>
              <input type="checkbox" id="todocheck" />
             {task.description}
              <button id="deletButton" onClick={this.deletTodoTask}>Delete</button>
             </li>
            ))
          ) : (
            <p>Todo list is empty</p>
          )}
        </ol>
        <p>
          
        </p>
      </div>
    );
  }
}

export default List;