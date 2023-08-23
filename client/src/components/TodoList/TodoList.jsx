import React from "react";

// CSS
import "./todolist.css";

// components
import EmptyTodo from "../EmptyTodo/EmptyTodo";
import Todo from "../TodoItem/TodoItem";

const TodoList = () => {
  return (
    <ul className="todo-list">
      <Todo />
    </ul>
  );
};

export default TodoList;
