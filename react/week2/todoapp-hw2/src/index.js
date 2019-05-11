import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import List from "./list"
import Todoinput from "./InputTodo"



class App extends Component {
  state={
    todoArray:[
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
    ]
  }

// function 
addTodoTask=(task)=>{
  const newTodoTask={
    id: this.state.todoArray.length+1,
    description: task,
    done: false
  };

  const newTodoArray = this.state.todoArray.concat(newTodoTask);
  this.setState({todoArray:newTodoArray});
  console.log(this.state.todoArray)

}

  render() {
   
    return (
      /*<div> 
        <h1 id="pageHead">Marcel's Todo List</h1>
        <div>
          <Todoinput addTodoTask={this.addTodoTask} />
        </div>
        <div />
        <ol>
          {this.state.todoArray.length > 0 ? (
            this.state.todoArray.map(task => (
              //<li>
              <List description={task.description} done={task.done} />
              //</li>
            ))
          ) : (
            <p>Todo list is empty</p>
          )}
        </ol>
      </div>*/

      <div> 
      <h1 id="pageHead">Marcel's Todo List</h1>
      <div>
        <Todoinput addTodoTask={this.addTodoTask} />
      </div>
      <div />
      
            <List todoArray={this.state.todoArray} />
            
    </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
