
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class List extends React.Component {
  render() {
    const { description, date } = this.props;
    return (
      <div>
        <p>
          {description}, {date}
        </p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const todoArray = [
      { description: "Get out of bed", date: "Wed Sep 13 2017" },

      { description: "Brush teeth", date: "Thu Sep 14 2017" },

      { description: "Eat breakfast", date: "Fri Sep 15 2017" },

      { description: "Go to HackYourFuture class", date: "Sun May 5 2019" }
    ];
    return (
      <div>
        <h1 id="pageHead">Marcel's Todo List</h1>
        <ol>
          {todoArray.length > 0 ? (
            todoArray.map(task => (
              <li>
                <List description={task.description} date={task.date} />
              </li>
            ))
          ) : (
            <p>Todo list is empty</p>
          )}
        </ol>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
