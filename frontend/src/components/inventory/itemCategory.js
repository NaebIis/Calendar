import React from "react";
import { connect } from "react-redux";
import editClickedCategory from "../../actions/inventory/updateClickedCategory";
import updateClickedCategoryItems from "../../actions/inventory/updateClickedCategoryItems";
import Item from "./item";

const mapStateToProps = state => {
  return {
    allItems: state.inventoryItems.inventory_items,
    allItemCategories: state.inventoryItemCategory.inventory_item_categories,
    clickedCategory: state.inventoryItemCategory.clickedItemCategoryName,
    clickedCategoryItems: state.inventoryItemCategory.clickedCategoryItems,
    categoryItemJoin: state.categoryItemJoin.category_item_join
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCategoryName: newCategoryId =>
      dispatch(editClickedCategory(newCategoryId)),
    updateClickedCategoryItems: newClItems =>
      dispatch(updateClickedCategoryItems(newClItems))
    //
  };
};

class ItemCategory extends React.Component {
  //   itemLists = () => {
  //     if (this.props.clickedCategory) {
  //       this.props.updateClickedCategoryItems([]);
  //       let id = this.props.clickedCategory;
  //       let temp = [];
  //       let join = this.props.categoryItemJoin;
  //       this.props.allItems.map(item => {
  //         join.map(join => {
  //           if (join.category_id === id && join.item_id === item.id) {
  //             return temp.push(item);
  //           }
  //         });
  //       });
  //       return this.props.updateClickedCategoryItems(temp);
  //     }
  //   };
  renderItemCategory = () => {
    let id = this.props.itemCategory.id;
    return (
      <li
        onClick={() => {
          this.props.editCategoryName(id);
        }}
      >
        <p>{this.props.itemCategory.name}</p>
      </li>
    );
  };

  render() {
    return (
      <div>
        {this.renderItemCategory()}{" "}
        {this.props.clickedCategoryItems.map(item => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCategory);
