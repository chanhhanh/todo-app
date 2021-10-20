import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Routes } from "./configs/Routes";
import { MyRoute } from "./components/MyRoute";
import { Navbar } from "./components/Navbar";
import { MyContextProvider } from "./contexts/MyContext";

function App() {
  return (
    <div className='main m-auto max-w-3xl'>
      <MyContextProvider>
        <Router>
          <Switch>
            {Routes.map((item, index) => {
              return (
                <MyRoute
                  key={index}
                  path={item.path}
                  component={item.component}
                />
              );
            })}
          </Switch>
          <Navbar />
        </Router>
      </MyContextProvider>
    </div>
  );
}

export default App;
