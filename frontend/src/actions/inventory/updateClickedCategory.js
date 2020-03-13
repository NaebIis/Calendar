import { store } from "../../fetching/fetching";

export default function updateClickedCategory(newCategoryId) {
  let allItems = store.getState().inventoryItems.inventory_items;
  let id = newCategoryId;
  let clickedCategoryItems = [];
  let join = store.getState().categoryItemJoin.category_item_join;
  allItems.forEach(item => {
    join.forEach(join => {
      if (join.category_id === id && join.item_id === item.id) {
        return clickedCategoryItems.push(item);
      }
    });
  });

  return dispatch => {
    dispatch({
      type: "UPDATE_CLICKED_CATEGORY_NAME",
      payload: { newCategoryId, clickedCategoryItems }
    });
  };
}
