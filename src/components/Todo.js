import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const Todo = ({ text, deadline, todo }) => {
  return (
    <>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          <div
            className={
              todo.completed ? "line-through text-gray-500" : "text-green-500"
            }
          >
            {text}
          </div>
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Deadline: {deadline}
        </Typography>
      </CardContent>
    </>
  );
};
