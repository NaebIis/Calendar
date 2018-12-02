const INIT_STATE = {
  fetching: false,
  fetched: false,
  error: null,
  inventory_items: []
};

const InventoryItems = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "INVENTORY_ITEMS_PENDING": {
      return {
        ...state,
        fetching: true
      };
    }
    case "INVENTORY_ITEMS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        inventory_items: action.payload
      };
    }
    case "INVENTORY_ITEMS_REJECTED": {
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

export default InventoryItems;
