import getPartyEvents from "../../fetching/fetching";

export default function addToPartyEvent(newPartyEventJoin, partyEventId) {
  let obj = {
    item_id: newPartyEventJoin.id,
    partyEvent_id: partyEventId
  };
  return dispatch => {
    fetch(`http://localhost:3000/party_event_item_joins`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then(resp => resp.json())
      .then(() =>
        dispatch({
          type: "ADD_CLICKED_PARTY_EVENTS",
          payload: newPartyEventJoin
        })
      )
      .then(resp => {
        console.log(newPartyEventJoin);
        // this.getPartyEvents();
      });
  };
}
