import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Calendar from "./events/calendarContainer";
import NotePad from "./notePad/notePad";
import InventoryHome from "./inventory/inventoryHome";
import ContactsHome from "./contacts/contactsHome";

const Main = () => (
  <main className="testing">
    <header className="mainHeader">
      <h1 id="App-Name">Edges Calendar</h1>
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calendar" component={Calendar} />
      <Route exact path="/notePad" component={NotePad} />
      <Route exact path="/inventory" component={InventoryHome} />
      <Route exact path="/contacts" component={ContactsHome} />
    </Switch>
  </main>
);

export default Main;
