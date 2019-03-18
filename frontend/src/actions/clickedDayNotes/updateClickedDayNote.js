export function updateClickedDayNote(newNotes) {
  console.log(newNotes)
  if (newNotes) {
    return dispatch => {
      dispatch({
        type: "NEW_CLICKED_DAY_NOTE",
        payload: newNotes
      });
    };
  }
  else if (!newNotes) {
    return dispatch => {
      dispatch({
        type: "NEW_CLICKED_DAY_NOTE",
        payload: ""
      });
    };
  }
}

