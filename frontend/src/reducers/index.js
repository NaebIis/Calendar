import { combineReducers } from "redux";

import events from "./events";
import ClickedDayNotes from "./clickedDayNotes";

const rootReducer = combineReducers({
  events: events,
  clickedDayNotes: ClickedDayNotes
});

export default rootReducer;
