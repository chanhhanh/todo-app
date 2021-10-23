import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
export const TimelineObj = ({ text, deadline, todo }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color='text.secondary'>
        {deadline}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot
          variant='outlined'
          color={todo.completed ? "success" : "secondary"}
        />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent color={todo.completed ? "success" : "primary"}>
        {text}
      </TimelineContent>
    </TimelineItem>
  );
};
