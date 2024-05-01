import { useState } from "react";
import TodoItem from "./TodoItem";

import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [arr, setArr] = useState([]);
  //addToDo - saves item to Arr
  const addToDo = () => {
    if (todo === "") {
      alert("Please add to do item!");
    } else {
      setArr([...arr, todo]);
    }
    setTodo("");
  };
  const clearList = () => {
    setArr([]);
    setTodo("");
  };
  return (
    <>
      <div className="wrapper">
        <h1>r: To-Do List</h1>
        <div className="container">
          <div className="row">
            <input
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              id="input"
              type="text"
              value={todo}
              className="form-control"
              placeholder="e.g. learn react"
            />
            <button id="add-btn" className="btn btn-primary" onClick={addToDo}>
              Submit
            </button>
          </div>
        </div>

        <div className="list">
          <ul id="list">
            {arr.map((item) => {
              return <TodoItem item={item} />;
            })}
          </ul>
        </div>
        <div>
          <button
            id="clear-btn"
            onClick={clearList}
            className="btn btn-warning"
          >
            Clear Items
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
