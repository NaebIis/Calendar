import { combineReducers } from "redux";

import events from "./events";
// import updateState from "./updateState";

// const INIT_STATE = {
//   fetching: false,
//   fetched: false,
//   error: null,
//   events: [],
//   addEventForm: false
// };

const rootReducer = combineReducers({
  events: events
  // updateState: updateState
});
// const rootReducer = combineReducers({
//   fetching: Fetching,
//   fetched: Fetching,
//   error: Fetching,
//   events: Fetching,
//   addEventForm: Fetching
// });

export default rootReducer;
