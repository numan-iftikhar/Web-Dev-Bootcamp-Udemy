import React, { useState } from "react";
import InputArea from "./components/InputArea";
import TodoItem from "./components/TodoItem";

function App() {
  // TODO: Clear text field after entering the todo
  const [todos, setTodos] = useState([]);

  function addTodo(inputText) {
    setTodos((prevTodos) => [...prevTodos, inputText]);
  }

  function deleteItem(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
      addTodo={addTodo}/>
      <div>
        <ul>
          {todos.map((todoItem, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                text={todoItem}
                checked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
