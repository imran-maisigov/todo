import React from "react";

// CSS
import "./todofilter.css";

const TodoFilter = () => {
  return (
    <div className="todo-filter">
      <p className="todo-filter__text text--blue">
        Cозданные задачи <span className="todo-flter__count">0</span>
      </p>

      <p className="todo-filter__text text--purple">
        Завершенные <span className="todo-flter__count">0</span>
      </p>
    </div>
  );
};

export default TodoFilter;
