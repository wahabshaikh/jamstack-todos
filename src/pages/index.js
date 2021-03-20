import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "../components/todo";
import "./index.css";

export default function Home() {
  const [status, setStatus] = useState("loading");
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    let cancelled = false;

    if (status !== "loading") return;
    axios("/api/get-all-todos").then((res) => {
      if (cancelled) return;

      if (res.status !== 200) {
        console.error("Error loading todos!");
        console.error(res);
        return;
      }

      setTodos(res.data.todos);
      setStatus("loaded");
    });

    return () => {
      cancelled = true;
    };
  }, [status]);

  return (
    <main>
      <h1 className="heading">JAMstack Todos</h1>
      {todos ? (
        <ul className="todos">
          {todos.map((todo) => (
            <li key={todo._id} className="todo">
              <Todo todo={todo} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="loading">loading todos...</div>
      )}
    </main>
  );
}
