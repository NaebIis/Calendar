export function updateClickedDayNote(newNotes) {
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

