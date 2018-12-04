import { store } from "../../fetching/fetching";

export default function updateClickedCategory(newCategoryId) {
  console.log(store.getState().inventoryItemCategory.clickedCategoryItems);

  let allItems = store.getState().inventoryItems.inventory_items;
  let id = newCategoryId;
  let clickedCategoryItems = [];
  let join = store.getState().categoryItemJoin.category_item_join;

  allItems.map(item => {
    join.map(join => {
      if (join.category_id === id && join.item_id === item.id) {
        console.log(item);
        return clickedCategoryItems.push(item);
      }
    });
  });

  return dispatch => {
    dispatch({
      type: "UPDATE_CLICKED_CATEGORY_NAME",
      payload: { newCategoryId, clickedCategoryItems }
    });
    // dispatch({
    //   type: "UPDATE_CLICKED_CATEGORY_ITEMS",
    //   payload: newClItems
    // });
  };
}

// var promise1 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('foo');
//   }, 300);
// });

// itemLists = () => {
//   if (this.props.clickedCategory) {
//     //   this.props.updateClickedCategoryItems(null);
//     let id = this.props.clickedCategory;
//     let temp = [];
//     let join = this.props.categoryItemJoin;
//     this.props.allItems.map(item => {
//       join.map(join => {
//         if (join.category_id === id && join.item_id === item.id) {
//           return temp.push(item);
//         }
//       });
//     });
//     return this.props.updateClickedCategoryItems(temp);
//   }
// };
