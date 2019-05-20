import React, { Component } from "react";

import Todoinput from "./InputTodo"
//import{inputValue} from "./InputTodo"


class Addbutton extends Component {


  // function to execute when the "Add to list" button is clicked.
  //This function receives the props from Todoinput called in App component
  //addButtonClik = (inputValue,addTodoTask) => {
    
     // inputValue === ""
      //  ? alert("Input field is empty, You must enter a Todo task")
       // : addTodoTask(inputValue);
    
 // };

  render() {
 const {addButtonClik}=this.props;
    let inputValue = Todoinput.inputValue; 
    console.log(inputValue)

    return (
      <div id="addButtonDiv">
        <button id="addButton" onClick ={()=>addButtonClik(inputValue)}>
          Add to list
        </button>
      </div>
    );
  }
}

export default Addbutton;
