import { combineReducers } from "redux";

import events from "./events";
import ClickedDayNotes from "./clickedDayNotes";
import Inventory_items from "./inventory_items";

const rootReducer = combineReducers({
  events: events,
  clickedDayNotes: ClickedDayNotes,
  Inventory_items: Inventory_items
});

export default rootReducer;
