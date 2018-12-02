import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Calendar from "./events/calendarContainer";
import NotePad from "./notePad/notePad";
import InventoryHome from "./inventory/inventoryHome";

const Main = () => (
  <main>
    <header className="mainHeader" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calendar" component={Calendar} />
      <Route exact path="/notePad" component={NotePad} />
      <Route exact path="/inventory" component={InventoryHome} />
    </Switch>
  </main>
);

export default Main;
