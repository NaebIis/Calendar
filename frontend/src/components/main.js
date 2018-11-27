import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Calendar from "./calendarContainer";
import NotePad from "./notePad";

const Main = () => (
  <main>
    <header className="mainHeader">
      {/* <a href="" className="Login-btn">
        Login
      </a> */}
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calendar" component={Calendar} />
      <Route exact path="/notePad" component={NotePad} />
    </Switch>
  </main>
);

export default Main;
