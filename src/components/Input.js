import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import axios from "axios";

export const Input = (props) => {
  const [time, setTime] = React.useState(new Date().toDateString().slice(3));

  const inputHandler = (e) => {
    console.log(e.target.value);
    props.setValue(e.target.value);
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (props.value) {
  //     props.setTodos([
  //       ...props.todos,
  //       {
  //         text: props.value,
  //         deadline: time,
  //         completed: false,
  //         id: Math.random() * 10000,
  //       },
  //     ]);
  //     props.setValue("");
  //   }
  // };

  const submitHandlerMongoDB = () => {
    axios
      .post(`${props.urlRequest}api/todo/post`, {
        id: Math.random() * 10000,
        text: props.value,
        deadline: time,
        completed: false,
      })
      .then(() => props.getTodoList());
    props.setValue("");
  };

  const statusHandler = (e) => {
    console.log(e.target.value);
    props.setStatus(e.target.value);
  };

  const handleTime = (newValue) => {
    setTime(newValue.toDateString().slice(3));
  };
  return (
    <>
      <div className='flex justify-around m-auto max-w-2xl	'>
        <TextField
          onChange={inputHandler}
          id='standard-basic'
          label='Add todo...'
          variant='standard'
          value={props.value}
        />
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DesktopDatePicker
            label='Deadline'
            inputFormat='MM/dd/yyyy'
            value={time}
            onChange={handleTime}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <Button
          color='primary'
          disabled={!props.value}
          onClick={submitHandlerMongoDB}
          variant='contained'
        >
          Add
        </Button>
        <FormControl>
          <InputLabel variant='standard' htmlFor='uncontrolled-native'>
            Filter
          </InputLabel>
          <NativeSelect
            inputProps={{
              name: "Filter",
              id: "uncontrolled-native",
            }}
            onClick={statusHandler}
          >
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='uncompleted'>Uncompleted</option>
          </NativeSelect>
        </FormControl>
      </div>
    </>
  );
};
