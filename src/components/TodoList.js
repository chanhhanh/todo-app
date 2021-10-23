import React, { useContext } from "react";
import { MyContext } from "../contexts/MyContext";
import { Todo } from "./Todo";
import { TodoButtons } from "./TodoButtons";
import Card from "@mui/material/Card";

export const TodoList = (prop) => {
  const { filter } = useContext(MyContext);
  return (
    <div>
      {filter.length !== 0 && (
        <Card>
          <div className='todo grid grid-cols-2'>
            {filter.map((todo) => (
              <>
                <div>
                  <Todo
                    text={todo.text}
                    deadline={todo.deadline}
                    key={todo.id}
                    todos={prop.todos}
                    todo={todo}
                    setTodos={prop.setTodos}
                  />
                </div>
                <div>
                  <TodoButtons
                    text={todo.text}
                    deadline={todo.deadline}
                    key={todo.id}
                    todos={prop.todos}
                    todo={todo}
                    setTodos={prop.setTodos}
                  />
                </div>
              </>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};
