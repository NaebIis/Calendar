const INIT_STATE = {
  fetching: false,
  fetched: false,
  error: null,
  events: [],
  addEventForm: false
};

const Fetching = (state = INIT_STATE, action) => {
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
    default:
      return state;
  }
};

export default Fetching;
