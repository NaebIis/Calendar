export default function createNewInventoryItem(newItemEvent) {
  newItemEvent.preventDefault();
  let tempEvent = newItemEvent.target.parentElement.children;
  let newItemName = {
    name: tempEvent[2].children.name.value
  };
  let newIteCatJoin = {
    category_id: tempEvent[4].id
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
      .then(resp => resp.json())
      .then(resp => (newIteCatJoin.item_id = resp.id))
      .then(resp => (newItemName.id = resp))
      .then(() => {
        console.log(newItemName, newIteCatJoin);
        dispatch({
          type: "CREATE_NEW_INVENTORY_ITEM",
          payload: { newItemName, newIteCatJoin }
        });
      });
  };
}
