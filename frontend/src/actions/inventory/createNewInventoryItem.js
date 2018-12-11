export default function createNewInventoryItem(event, categoryId) {
  event.preventDefault();
  let tempEvent = event.target.parentElement.children;
  let newItemName = {
    name: tempEvent[2].children.name.value
  };
  let newIteCatJoin = {
    category_id: categoryId
  };
  return dispatch => {
    fetch("http://localhost:3000/inventory_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newItemName)
    })
      .then(newItemResp => newItemResp.json())
      .then(newItemResp => {
        newIteCatJoin.item_id = newItemResp.id;
        newItemName = newItemResp;
      })
      .then(() => {
        fetch("http://localhost:3000/category_item_joins", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(newIteCatJoin)
        })
          .then(newJoin => newJoin.json())
          .then(newJoin => {
            newIteCatJoin = newJoin;
          })
          .then(() => {
            dispatch({
              type: "CREATE_NEW_JOIN_ITEM",
              payload: newIteCatJoin
            });
          });
      })
      .then(() => {
        dispatch({
          type: "CREATE_NEW_INVENTORY_ITEM",
          payload: newItemName
        });
      });
  };
}
