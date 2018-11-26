export function updateNotes(obj, id) {
  return dispatch => {
    fetch(`http://localhost:3000/events/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(obj)
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
