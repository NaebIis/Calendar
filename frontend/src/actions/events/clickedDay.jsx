export function clickedDay(clickedDay) {
  // getClickedDayNotes

  return dispatch => {
    dispatch({
      type: "UPDATE_CLICKED_DAY",
      payload: clickedDay
    });
  };
}
