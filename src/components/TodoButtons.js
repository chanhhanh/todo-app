import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

export const TodoButtons = ({ todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className='m-5 p-1 flex justify-end'>
      <ButtonGroup disableElevation variant='contained'>
        <Tooltip title='Mark As Completed'>
          <IconButton onClick={completeHandler} color='success'>
            <Icon>done</Icon>
          </IconButton>
        </Tooltip>
        <Tooltip title='Delete'>
          <IconButton onClick={deleteHandler} color='error'>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
};
