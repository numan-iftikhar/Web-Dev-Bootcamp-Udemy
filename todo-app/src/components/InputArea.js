import React, { useState } from "react";

const InputArea = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    let newText = event.target.value;
    setInputText(newText);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText}/>
      <button
        onClick={() => {
          addTodo(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputArea;
