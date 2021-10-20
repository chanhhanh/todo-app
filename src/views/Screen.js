import React, { useState, useContext, useEffect } from "react";
import { Input } from "../components/Input";
import { TodoList } from "../components/TodoList";
import { MyContext } from "../contexts/MyContext";
import Container from "@mui/material/Container";

export const Screen = () => {
  const [value, setValue] = useState("");
  const { todos, setTodos, filter, setFilter } = useContext(MyContext);
  const [status, setStatus] = useState("all");
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilter(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilter(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilter(todos);
    }
  };
  return (
    <Container maxWidth='lg'>
      <div className='m-5'>
        <Input
          value={value}
          setValue={setValue}
          todos={todos}
          setTodos={setTodos}
          status={status}
          setStatus={setStatus}
          filter={filter}
        />
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
    </Container>
  );
};
