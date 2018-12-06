const INIT_STATE = {
  fetching: false,
  fetched: false,
  error: null,
  partyEvents: [],
  clickedPartyEventName: "",
  clickedPartyEventItems: []
  // newItemCategoryId: "",
  // newItemCategoryName: ""
};

const PartEvents = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "PARTY_EVENTS_PENDING": {
      return {
        ...state,
        fetching: true
      };
    }
    case "PARTY_EVENTS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        partyEvents: action.payload
      };
    }
    case "PARTY_EVENTS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case "UPDATE_CLICKED_PARTY_EVENT_NAME": {
      return {
        ...state,
        clickedPartyEventName: action.payload.newPartyEventId,
        clickedPartyEventItems: action.payload.clickedPartyEventItems
      };
    }
    default:
      return state;
  }
};

export default PartEvents;
