import React from "react";

// CSS
import "./emptytodo.css";

// images
import noteImg from "../../assets/images/note.png";

const EmptyTodo = () => {
  return (
    <li className="empty-todo">
      <img src={noteImg} alt="note" />
      У вас еще нет зарегистрированных задач
      <br />
      Создавайте задачи и организуйте свои дела
    </li>
  );
};

export default EmptyTodo;
