export function updateClickedDayNote(newNotes) {
  return dispatch => {
    dispatch({
      type: "NEW_CLICKED_DAY_NOTE",
      payload: newNotes
    });
  };
}
