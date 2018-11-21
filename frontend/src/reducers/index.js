import { combineReducers } from "redux";

import Events from "./events";
import CurrentEvent from "./CurrentEvent";

// const INIT_STATE = {
//   fetching: false,
//   fetched: false,
//   error: null,
//   events: [],
//   addEventForm: false
// };

const rootReducer = combineReducers({
  events: Events
});
// const rootReducer = combineReducers({
//   fetching: Fetching,
//   fetched: Fetching,
//   error: Fetching,
//   events: Fetching,
//   addEventForm: Fetching
// });

export default rootReducer;
