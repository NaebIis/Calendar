export default function newItemCategoryIdFunction(newEvent) {
  let id = newEvent.target.id;
  return dispatch => {
    dispatch({
      type: "NEW_ITEM_CAT_ID_FUNCTION",
      payload: id
    });
  };
}
