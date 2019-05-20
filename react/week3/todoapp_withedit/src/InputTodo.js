import React, { Component } from "react";

class Todoinput extends Component {
  state = {
    inputValue: ""
  };

  //keeps track and captures input being made
  inputChange = e => {
    const newValue = e.target.value;
    this.setState({ inputValue: newValue });
  };

  // function to execute when the "Add to list" button is clicked.
  //This function receives the props from Todoinput called in App component
  addButtonClik = () => {
    const inputValue = this.state.inputValue;
    this.setState({ inputValue: "" });

    inputValue === ""
      ? alert("You must enter a Todo task") // gives alert if user is trying to add an empty input
      : this.props.addTodoTask(inputValue);
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div id="taskInputDiv">
        <input
          placeholder="write todo task here"
          id="todoIput"
          value={inputValue}
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
