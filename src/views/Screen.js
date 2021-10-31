import React, { useState, useContext, useEffect } from "react";
import { Input } from "../components/Input";
import { TodoList } from "../components/TodoList";
import { MyContext } from "../contexts/MyContext";
import Container from "@mui/material/Container";
import axios from "axios";

export const Screen = () => {
  const [value, setValue] = useState("");
  const { todos, setTodos, filter, setFilter } = useContext(MyContext);
  const [status, setStatus] = useState("all");
  const urlRequest = process.env.REACT_APP_API_KEY;

  const getTodoList = () => {
    axios.get(`${urlRequest}api/todo`).then((res) => {
      setTodos(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  useEffect(getTodoList, []);

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
          urlRequest={urlRequest}
          getTodoList={getTodoList}
        />
      </div>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        urlRequest={urlRequest}
        getTodoList={getTodoList}
        filterHandler={filterHandler}
      />
    </Container>
  );
};
