const INIT_STATE = {
  fetching: false,
  fetched: false,
  error: null,
  events: [],
  addEventForm: false,
  clickedDay: ""
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
    case "UPDATE_NOTES": {
      const temp = [];
      state.events.map(thing => {
        if (thing.id === action.payload.id) {
          thing.notes = action.payload.notes;
          temp.push(thing);
        } else {
          temp.push(thing);
        }
      });
      return { ...state, events: temp };
    }
    case "DELETE_EVENT": {
      const temp = state.events.filter(thing => {
        return thing.id !== action.payload;
      });
      return { ...state, events: temp };
    }
    case "UPDATE_CLICKED_DAY": {
      return { ...state, clickedDay: action.payload };
    }
    default:
      return state;
  }
};

export default Events;
