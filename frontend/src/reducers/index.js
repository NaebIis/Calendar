import { combineReducers } from "redux";

import Fetching from "./fetching";
import AddEventForm from "./addEventForm";
import postEvent from "./postEvent";

const rootReducer = combineReducers({
  init_state: Fetching,
  addEventForm: AddEventForm,
  postEvent: postEvent
});

export default rootReducer;
