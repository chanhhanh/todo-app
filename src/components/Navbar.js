import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../configs/Routes";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export const Navbar = () => {
  const [value, setValue] = React.useState(-1);
  return (
    <div className='flex justify-center fixed bottom-0 -inset-x-2/4'>
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {Routes.map((item, index) => (
            <BottomNavigationAction
              component={Link}
              label={item.label}
              to={item.path}
              key={index}
              icon={item.icon}
            />
          ))}
        </BottomNavigation>
      </Box>
    </div>
  );
};
