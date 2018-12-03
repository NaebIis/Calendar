import { combineReducers } from "redux";

import events from "./events";
import ClickedDayNotes from "./clickedDayNotes";
import Inventory_items from "./inventory_items";
import CategoryItemJoin from "./categoryItemJoin";
import InventoryItemCategory from "./inventoryItemCategory";

const rootReducer = combineReducers({
  events: events,
  clickedDayNotes: ClickedDayNotes,
  categoryItemJoin: CategoryItemJoin,
  inventoryItemCategory: InventoryItemCategory,
  inventoryItems: Inventory_items
});

export default rootReducer;
