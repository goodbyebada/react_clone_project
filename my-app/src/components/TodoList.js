import React, { useState } from "react";
import App from "../App";
import TodoItem from "./TodoItem";
import "../components/TodoList.css";

function TodoList({ todos, onRemove, onCheck, onImportant }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onCheck={onCheck}
          onImportant={onImportant}
          className="TodoItem"
        />
      ))}
    </div>
  );
}

export default TodoList;
