import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  // TODO: Clear text field after entering the todo
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    let newText = event.target.value;
    setInputText(newText);
  }

  function addTodo() {
    setTodos((prevTodos)=> [...prevTodos, inputText]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todoItem) => {
            return <TodoItem
            text={todoItem}
            />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
