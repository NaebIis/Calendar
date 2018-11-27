export function postEvent(obj) {
  return dispatch => {
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then(resp => resp.json())
      .then(resp => {
        dispatch({
          type: "POST_EVENT",
          payload: resp
        });
      });
  };
}
