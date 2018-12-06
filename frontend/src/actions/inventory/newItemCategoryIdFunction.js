export default function newItemCategoryIdFunction(id, name) {
  return dispatch => {
    dispatch({
      type: "NEW_ITEM_CAT_ID_FUNCTION",
      payload: { id, name }
    });
  };
}
