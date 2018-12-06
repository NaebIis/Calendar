import { store } from "../../fetching/fetching";

export default function updatePartyEvent(newPartyEventId) {
  let allItems = store.getState().inventoryItems.inventory_items;
  let id = newPartyEventId;
  let clickedPartyEventItems = [];
  let join = store.getState().partEventItemJoins.partEventItemJoins;

  allItems.map(item => {
    join.map(join => {
      //   console.log(item);
      if (join.partyEvent_id === id && join.item_id === item.id) {
        console.log(item);
        return clickedPartyEventItems.push(item);
      }
    });
  });
  return dispatch => {
    dispatch({
      type: "UPDATE_CLICKED_PARTY_EVENT_NAME",
      payload: { newPartyEventId, clickedPartyEventItems }
    });
  };
}
