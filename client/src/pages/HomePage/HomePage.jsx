import React from "react";

// components
import Form from "../../components/Form/Form";
import TodoFilter from "../../components/TodoFilter/TodoFilter";
import TodoList from "../../components/TodoList/TodoList";

const HomePage = () => {
  return (
    <>
      <Form />
      <TodoFilter />
      <TodoList />
    </>
  );
};

export default HomePage;
