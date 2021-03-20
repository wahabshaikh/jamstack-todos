import React from "react";
import "./todo.css";

export default function Todo({ todo }) {
  return (
    <div className={`text ${todo.completed && "completed"}`}>{todo.text}</div>
  );
}
