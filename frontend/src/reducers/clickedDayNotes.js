const INIT_STATE = {
  fetching: false,
  fetched: false,
  error: null,
  notes: [],
  clickedDay: "Tue Nov 20 2018 00:00:00 GMT-0600 (Central Standard Time)"
};

const ClickedDayNotes = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CLICKED_DAY_NOTES_PENDING": {
      return {
        ...state,
        fetching: true
      };
    }
    case "CLICKED_DAY_NOTES_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        notes: action.payload
      };
    }
    case "CLICKED_DAY_NOTES_REJECTED": {
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

export default ClickedDayNotes;
