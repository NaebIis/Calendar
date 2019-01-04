export function deleteEvent(id) {
  return dispatch => {
    fetch(`http://localhost:3000/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(() => {
      dispatch({
        type: "DELETE_EVENT",
        payload: id
      });
    });
  };
}
