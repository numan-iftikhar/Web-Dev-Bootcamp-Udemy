import React, { useState } from "react";

const CreateArea = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    addNote(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea name="content" placeholder="Add a note..." rows="3"></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
