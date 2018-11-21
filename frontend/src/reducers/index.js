import { combineReducers } from "redux";

import Fetching from "./fetching";
import AddEventForm from "./addEventForm";
import postEvent from "./postEvent";

// const INIT_STATE = {
//   fetching: false,
//   fetched: false,
//   error: null,
//   events: [],
//   addEventForm: false
// };

const rootReducer = combineReducers({
  init_state: Fetching,
  addEventForm: AddEventForm,
  postEvent: postEvent
});
// const rootReducer = combineReducers({
//   fetching: Fetching,
//   fetched: Fetching,
//   error: Fetching,
//   events: Fetching,
//   addEventForm: Fetching
// });

export default rootReducer;
