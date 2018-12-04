const INIT_STATE = {
  fetching: false,
  fetched: false,
  error: null,
  inventory_item_categories: [],
  clickedItemCategoryName: "",
  clickedCategoryItems: []
};

const InventoryItemCategory = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "INVENTORY_ITEM_CATEGORIES_PENDING": {
      return {
        ...state,
        fetching: true
      };
    }
    case "INVENTORY_ITEM_CATEGORIES_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        inventory_item_categories: action.payload
      };
    }
    case "INVENTORY_ITEM_CATEGORIES_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case "UPDATE_CLICKED_CATEGORY_NAME": {
      return {
        ...state,
        clickedItemCategoryName: action.payload
      };
    }
    case "UPDATE_CLICKED_CATEGORY_ITEMS": {
      return {
        ...state,
        clickedCategoryItems: action.payload
      };
    }
    default:
      return state;
  }
};

export default InventoryItemCategory;
