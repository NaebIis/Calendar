export default function updateClickedCategoryItems(newClItems) {
  return dispatch => {
    dispatch({
      type: "UPDATE_CLICKED_CATEGORY_ITEMS",
      payload: newClItems
    });
  };
}
