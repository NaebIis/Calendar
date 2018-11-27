export function postClickedDayNote(day) {
  let temp = {
    day: day
  };
  return dispatch => {
    fetch(`http://localhost:3000/clicked_day_notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(temp)
    })
      .then(resp => resp.json())
      .then(resp => {
        dispatch({
          type: "POST_CLICKED_DAY_NOTES",
          payload: resp
        });
      });
  };
}
