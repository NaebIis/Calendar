const CurrentEvent = function(state = {}, action) {
  switch (action.type) {
    case "POST_EVENT": {
      return action.event;
    }
    default:
      return state;
  }
};

export default CurrentEvent;
