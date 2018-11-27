export function clickedDay(clickedDay) {
  return dispatch => {
    dispatch({
      type: "UPDATE_CLICKED_DAY",
      payload: clickedDay
    });
  };
}
