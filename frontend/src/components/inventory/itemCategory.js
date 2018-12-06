import React from "react";
import { connect } from "react-redux";
import editClickedCategory from "../../actions/inventory/updateClickedCategory";
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
      dispatch(editClickedCategory(newCategoryId))
    //
  };
};

class ItemCategory extends React.Component {
  renderItemCategory = () => {
    let id = this.props.itemCategory.id;
    return (
      <li
        id="DDL"
        onClick={() => {
          this.props.editCategoryName(id);
        }}
      >
        {this.props.itemCategory.name}
      </li>
    );
  };

  render() {
    return <div>{this.renderItemCategory()}</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCategory);
