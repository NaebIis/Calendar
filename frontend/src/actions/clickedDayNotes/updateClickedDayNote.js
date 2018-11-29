export function updateClickedDayNote(newNotes) {
  console.log(newNotes);
  return dispatch => {
    dispatch({
      type: "NEW_CLICKED_DAY_NOTE",
      payload: newNotes
    });
  };
}
