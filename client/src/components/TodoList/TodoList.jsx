import React from "react";

// CSS
import "./todolist.css";

// components
import EmptyTodo from "../EmptyTodo/EmptyTodo";
import TodoItem from "../TodoItem/TodoItem";
import { GlobalState } from "../../GlobalState";

const TodoList = () => {
  const state = React.useContext(GlobalState);

  const [todos, setTodos] = state.todos;

  return (
    <ul className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            title={todo.title}
            isComplete={todo.isComplete}
            id={todo.id}
          />
        ))
      ) : (
        <EmptyTodo />
      )}
    </ul>
  );
};

export default TodoList;
