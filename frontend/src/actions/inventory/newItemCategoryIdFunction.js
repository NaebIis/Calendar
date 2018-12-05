export default function newItemCategoryIdFunction(id) {
  return dispatch => {
    dispatch({
      type: "NEW_ITEM_CAT_ID_FUNCTION",
      payload: id
    });
  };
}
