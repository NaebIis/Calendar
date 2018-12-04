import { store } from "../../fetching/fetching";

export default function updateClickedCategory(newCategoryId) {
  console.log(store.getState());
  return dispatch => {
    dispatch({
      type: "UPDATE_CLICKED_CATEGORY_NAME",
      payload: newCategoryId
    });
  };
}

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
