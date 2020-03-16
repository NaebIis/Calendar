import { getPartyEvents } from "../../fetching/fetching";

export default function deletePartyEvent(partyEventName) {
  console.log("=====", partyEventName);
  return dispatch => {
    fetch(`http://localhost:3000/party_events/${partyEventName}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(() => {
      let temp = getPartyEvents;
      dispatch({
        type: "NEW_PARTY_EVENT_LIST",
        payload: temp
      });
    });
  };
}
