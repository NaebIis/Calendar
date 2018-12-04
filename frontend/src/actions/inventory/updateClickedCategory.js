export default function updateClickedCategory(newCategoryId) {
  return dispatch => {
    dispatch({
      type: "UPDATE_CLICKED_CATEGORY_NAME",
      payload: newCategoryId
    });
  };
}
