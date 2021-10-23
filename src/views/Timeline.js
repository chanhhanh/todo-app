import React, { useState, useContext, useEffect } from "react";
import { TimelineList } from "../components/TimelineList";
import { MyContext } from "../contexts/MyContext";
import Container from "@mui/material/Container";

export const Timeline = () => {
  const { todos, setTodos } = useContext(MyContext);
  const [timeline, setTimeline] = useState([]);
  useEffect(() => {
    addTimeline();
  }, [todos]);

  const addTimeline = () => {
    const array = todos;
    array.sort(function (a, b) {
      return new Date(a.deadline) - new Date(b.deadline);
    });
    setTimeline(array);
  };
  return (
    <Container maxWidth='lg'>
      <div className='m-5'></div>
      <TimelineList todos={timeline} setTodos={setTodos} />
    </Container>
  );
};
