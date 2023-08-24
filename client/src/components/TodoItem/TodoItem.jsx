import React from "react";

// CSS
import "./todoitem.css";

// images
import unfinishedImg from "../../assets/icons/unfinished.svg";
import completeImg from "../../assets/icons/complete.svg";
import trashImg from "../../assets/icons/trash.svg";
import { GlobalState } from "../../GlobalState";

const TodoItem = ({ title, isComplete, id }) => {
  const state = React.useContext(GlobalState);

  const [todos, setTodos] = state.todos;

  const oneUpdateTodo = (id, isComplete) => {
    const newData = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !isComplete };
      }

      return todo;
    });

    setTodos(newData);
  };

  const oneDeleteTodo = (id) => {
    const newData = todos.filter((todo) => todo.id !== id);

    setTodos(newData);
  };

  return (
    <li className="todo-item">
      <button
        onClick={() => oneUpdateTodo(id, isComplete)}
        className="todo-btn"
      >
        <img src={isComplete ? completeImg : unfinishedImg} alt="complete" />
      </button>

      <p className={isComplete ? "todo-title active" : "todo-title"}>{title}</p>

      <button onClick={() => oneDeleteTodo(id)} className="todo-btn">
        <img src={trashImg} alt="trash" />
      </button>
    </li>
  );
};

export default TodoItem;
