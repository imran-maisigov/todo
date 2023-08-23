import React from "react";

// CSS
import "./todoitem.css";

// images
import unfinishedImg from "../../assets/icons/unfinished.svg";
import completeImg from "../../assets/icons/complete.svg";
import trashImg from "../../assets/icons/trash.svg";

const Todo = () => {
  return (
    <li className="todo-item">
      <button className="todo-btn">
        <img src={unfinishedImg} alt="complete" />
      </button>

      <p className="todo-title">Сообщение</p>

      <button className="todo-btn">
        <img src={trashImg} alt="trash" />
      </button>
    </li>
  );
};

export default Todo;
