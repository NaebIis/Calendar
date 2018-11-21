const updateState = function(state = {}, action) {
  switch (action.type) {
    case "UPDATE_STATE": {
      debugger;
      return { ...state, events: [...state.events.events, action.payload] };
    }
    default:
      return state;
  }
};

export default updateState;
