import { combineReducers } from "redux";

import events from "./events";
import ClickedDayNotes from "./clickedDayNotes";
import Inventory_items from "./inventory_items";
import CategoryItemJoin from "./categoryItemJoin";
import InventoryItemCategory from "./inventoryItemCategory";
import PartyEvents from "./partyEvents";
import PartEventItemJoins from "./partyEventItemJoins";
import Contacts from "./contacts";

const rootReducer = combineReducers({
  events: events,
  clickedDayNotes: ClickedDayNotes,
  categoryItemJoin: CategoryItemJoin,
  inventoryItemCategory: InventoryItemCategory,
  inventoryItems: Inventory_items,
  partyEvents: PartyEvents,
  partEventItemJoins: PartEventItemJoins,
  contacts: Contacts
});

export default rootReducer;
