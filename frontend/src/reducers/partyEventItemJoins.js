const INIT_STATE = {
  fetching: false,
  fetched: false,
  error: null,
  partEventItemJoins: []
};

const PartEventItemJoins = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "PARTY_EVENT_ITEM_JOINS_PENDING": {
      return {
        ...state,
        fetching: true
      };
    }
    case "PARTY_EVENT_ITEM_JOINS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        partEventItemJoins: action.payload
      };
    }
    case "PARTY_EVENT_ITEM_JOINS_REJECTED": {
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

export default PartEventItemJoins;
