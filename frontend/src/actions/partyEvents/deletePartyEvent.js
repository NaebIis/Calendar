export default function deletePartyEvent(partyEventName) {
  console.log("=====", partyEventName);
  return dispatch => {
    fetch(`http://localhost:3000/party_events/${partyEventName}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(resp => resp.json())
      .then(resp => console.log(resp))
      .then(() =>
        dispatch({
          type: "THING",
          payload: null
        })
      );
  };
}
