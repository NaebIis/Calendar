import React from "react";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";
import Main from "./components/main";
import rootReducer from "./reducers/index";
import "./App.css";
const URL = "http://localhost:3000";

// const INIT_STATE = {
//   fetching: false,
//   fetched: false,
//   events: [],
//   error: null,
//   addEventForm: true
// };

// const reducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case "EVENTS_PENDING": {
//       return {
//         ...state,
//         fetching: true
//       };
//     }
//     case "EVENTS_FULFILLED": {
//       return {
//         ...state,
//         fetching: false,
//         fetched: true,
//         events: action.payload
//       };
//     }
//     case "EVENTS_REJECTED": {
//       return {
//         ...state,
//         fetching: false,
//         error: action.payload
//       };
//     }
//     default:
//       return state;
//   }
// };

const makeStore = () => {
  const store = createStore(
    // reducer,
    rootReducer,
    compose(
      applyMiddleware(promise(), thunk, createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
};

const store = makeStore();

store.dispatch({
  type: "EVENTS",
  payload: fetch(`${URL}/events`).then(resp => resp.json())
});
// store.dispatch(dispatch => {
//   dispatch({ type: "FETCHING_EVENTS" })
//   fetch(`${URL}/events`).then(resp => resp.json())
//     .then(data => {
//       dispatch({ type: "FETCH_COMPLETE", payload: data })
//     }).catch(err => {
//       dispatch({ type: "FETCH_EVENT_ERROR", payload: err })
//     })
// })

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
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
