export function clickedDay(day) {
  //   console.log(event.target.value);
  return dispatch => {
    dispatch({
      type: "DELETE_EVENT",
      payload: day
    });
  };
}
