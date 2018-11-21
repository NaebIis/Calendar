import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Calendar from "./calendarContainer";

const Main = () => (
  <main>
    <header className="mainHeader">
      <a href="" className="Login-btn">
        Login
      </a>
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calendar" component={Calendar} />
    </Switch>
  </main>
);

export default Main;
