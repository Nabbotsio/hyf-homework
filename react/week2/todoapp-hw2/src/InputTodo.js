import React, { Component } from "react";

class Todoinput extends Component {
  state = {
    inputValue: ""
  };

  // keeps track and captures input being made
  inputChange = e => {
    const newValue = e.target.value;
    console.log(newValue);
    this.setState({ inputValue: newValue });
    console.log(this.state.inputValue);
  };

  // function to execute when the "Add to list" button is clicked.
  //This function receives the props from Todoinput called in App component
  addButtonClik = () => {
    const inputValue = this.state.inputValue;

    {
      inputValue === ""
        ? alert("You must enter a Todo task") 
        : this.props.addTodoTask(inputValue);
    }
  };

  render() {
    return (
      <div id="taskInputDiv">
        <input
          placeholder="write todo task here"
          id="todoIput"
          onChange={this.inputChange}
        />
        <button id="addButton" onClick={this.addButtonClik}>
          Add to list
        </button>
      </div>
    );
  }
}

export default Todoinput;
