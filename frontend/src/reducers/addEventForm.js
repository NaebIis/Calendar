const addEventForm = function(state = {}, action) {
  switch (action.type) {
    case "ADD_EVENT_FORM": {
      return { ...state, addEventForm: !state.addEventForm };
    }
    default:
      return state;
  }
};

export default addEventForm;
