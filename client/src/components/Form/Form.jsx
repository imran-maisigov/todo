import React from "react";

// CSS
import "./form.css";

// components
import { GlobalState } from "../../GlobalState";

// images
import plusImg from "../../assets/icons/plus.svg";

const Form = () => {
  const state = React.useContext(GlobalState);

  const [text, setText] = state.text;
  const [todos, setTodos] = state.todos;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onAddTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: todos.length + 1,
      title: text,
      isComplete: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  console.log(todos);

  return (
    <form onSubmit={onAddTodo} className="todo-form">
      <input
        type="text"
        placeholder="Добавить новую задачу"
        required
        value={text}
        onChange={handleChange}
        className="todo-form__input"
      />

      <button type="submit" className="todo-form__btn">
        Создать <img src={plusImg} alt="plus" />
      </button>
    </form>
  );
};

export default Form;
