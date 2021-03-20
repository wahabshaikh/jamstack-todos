import React, { useState } from "react";
import axios from "axios";
import "./form.css";

export default function Form({ reloadTodos }) {
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (text === "") return;

    await axios.post("/api/create-todo", { text });

    setText("");
    reloadTodos();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Add a Todo
        <input
          className="form__input"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <button className="button">Save Todo</button>
    </form>
  );
}
