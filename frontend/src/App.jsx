import React from "react";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Main from "./components/main";
import { store } from "./fetching/fetching";
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <Provider store = { store } >
        <Router >
          <div>
            <Sidebar />
            <Main />
          </div>
        </Router> 
      </Provider>
    );
  }
}

export default App;