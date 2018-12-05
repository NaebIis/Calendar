const INIT_STATE = {
  fetching: false,
  fetched: false,
  error: null,
  category_item_join: []
};

const CategoryItemJoin = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CATEGORY_ITEM_JOIN_PENDING": {
      return {
        ...state,
        fetching: true
      };
    }
    case "CATEGORY_ITEM_JOIN_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        category_item_join: action.payload
      };
    }
    case "CATEGORY_ITEM_JOIN_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case "CREATE_NEW_JOIN_ITEM": {
      return {
        ...state,
        category_item_join: [...state.category_item_join, action.payload]
      };
    }
    default:
      return state;
  }
};

export default CategoryItemJoin;
