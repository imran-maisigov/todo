import React from "react";

// CSS
import "./form.css";

// images
import plusImg from "../../assets/icons/plus.svg";

const Form = () => {
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Добавить новую задачу"
        required
        className="todo-form__input"
      />

      <button type="submit" className="todo-form__btn">
        Создать <img src={plusImg} alt="plus" />
      </button>
    </form>
  );
};

export default Form;
