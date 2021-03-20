import React from "react";
import axios from "axios";
import "./todo.css";

export default function Todo({ todo, reloadTodos }) {
  const toggleCompleted = () => {
    axios
      .post("/api/toggle-completed", {
        id: todo._id,
        text: todo.text,
        completed: !todo.completed,
      })
      .then(reloadTodos);
  };

  const handleDelete = () => {
    axios.post("/api/delete-todo", { id: todo._id }).then(reloadTodos);
  };

  return (
    <>
      <label htmlFor={`todo-toggle-${todo._id}`} className="label">
        Mark Complete
      </label>
      <input
        id={`todo-toggle-${todo._id}`}
        type="checkbox"
        className="toggle"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      <p className={`text ${todo.completed && "completed"}`}>{todo.text}</p>

      <label htmlFor={`todo-delete-${todo._id}`} className="label">
        delete
      </label>
      <button onClick={handleDelete} className="delete">
        <span role="img" aria-label="delete" title="delete this todo">
          ❌
        </span>
      </button>
    </>
  );
}
