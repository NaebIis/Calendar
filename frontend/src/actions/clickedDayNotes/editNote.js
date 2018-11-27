export function editNotes(event, id) {
  let temp = {
    notes: event.target.value
  };
  return dispatch => {
    fetch(`http://localhost:3000/clicked_day_notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(temp)
    })
      .then(resp => resp.json())
      .then(resp => {
        dispatch({
          type: "UPDATE_NOTES",
          payload: resp
        });
      });
  };
}
