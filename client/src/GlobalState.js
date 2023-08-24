import React from "react";

export const GlobalState = React.createContext();

export const DataProvider = ({ children }) => {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [user, setUser] = React.useState({});

  const state = {
    text: [text, setText],
    todos: [todos, setTodos],
    user: [user, setUser],
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
