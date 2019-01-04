const INIT_STATE = {
  fetching: false,
  fetched: false,
  error: null,
  contacts: []
};

const Contacts = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CONTACTS_PENDING": {
      return {
        ...state,
        fetching: true
      };
    }
    case "CONTACTS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        contacts: action.payload
      };
    }
    case "CONTACTS_REJECTED": {
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

export default Contacts;
