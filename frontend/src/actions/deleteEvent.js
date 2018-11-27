export function deleteEvent(id) {
  //   console.log(event.target.value);
  return dispatch => {
    fetch(`http://localhost:3000/events/${id}`, {
      method: "Delete",
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
