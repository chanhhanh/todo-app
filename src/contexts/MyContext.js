import React, { createContext, useState } from "react";

export const MyContext = createContext({
  todos: [],
  setTodos: () => {},
  status: "all",
  setStatus: () => {},
  filter: [],
  setFilter: () => {},
  setTodoList: () => {},
  urlRequest: "",
});

export const MyContextProvider = ({ children }) => {
  const [myTodos, setMyTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  return (
    <MyContext.Provider
      value={{
        todos: myTodos,
        setTodos: setMyTodos,
        status: status,
        setStatus: setStatus,
        filter: filter,
        setFilter: setFilter,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
