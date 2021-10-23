import React, { useContext } from "react";
import { MyContext } from "../contexts/MyContext";
import Card from "@mui/material/Card";
import Timeline from "@mui/lab/Timeline";
import { TimelineObj } from "./TimelineObj";

export const TimelineList = (prop) => {
  const { filter } = useContext(MyContext);
  return (
    <div>
      {filter.length !== 0 && (
        <Card>
          <Timeline position='alternate'>
            {filter.map((todo) => (
              <TimelineObj
                text={todo.text}
                deadline={todo.deadline}
                key={todo.id}
                todos={prop.todos}
                todo={todo}
                setTodos={prop.setTodos}
              />
            ))}
          </Timeline>
        </Card>
      )}
    </div>
  );
};
