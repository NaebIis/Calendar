export function updateClickedDayNoteId(newNoteId) {
  console.log(newNoteId);
  return dispatch => {
    dispatch({
      type: "NEW_CLICKED_DAY_NOTE_ID",
      payload: newNoteId
    });
  };
}
