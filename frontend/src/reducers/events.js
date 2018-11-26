const INIT_STATE = {
  fetching: false,
  fetched: false,
  error: null,
  events: [],
  addEventForm: false
};

const Events = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "EVENTS_PENDING": {
      return {
        ...state,
        fetching: true
      };
    }
    case "EVENTS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        events: action.payload
      };
    }
    case "EVENTS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case "ADD_EVENT_FORM": {
      return { ...state, addEventForm: !state.addEventForm };
    }
    case "POST_EVENT": {
      return { ...state, events: [...state.events, action.payload] };
    }
    // case "UPDATE_NOTES": {
    //   return { ...state, events: [...state.events.notes, action.payload] };
    // }
    default:
      return state;
  }
};

export default Events;
