import { connect } from "react-redux";
import React from "react";
import Item from "./item";
import ItemCategory from "./itemCategory";
import updateClickedCategoryItems from "./updateClickedCategoryItems";

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
    updateClickedCategoryItems: newClItems =>
      dispatch(updateClickedCategoryItems(newClItems))
  };
};

class InventoryHome extends React.Component {
  itemLists = () => {
    if (this.props.clickedCategory) {
      this.props.updateClickedCategoryItems(null);
      let id = this.props.clickedCategory;
      let temp = [];
      let join = this.props.categoryItemJoin;
      this.props.allItems.map(item => {
        join.map(join => {
          if (join.category_id === id && join.item_id === item.id) {
            return temp.push(item);
          }
        });
      });
      this.props.updateClickedCategoryItems(temp);
    }
  };
  render() {
    this.itemLists();
    return (
      <div>
        <div className="itemCategoryName">
          <nav role="navigation">
            <ul>
              <li>
                Categories
                <ul class="dropdown">
                  {this.props.allItemCategories.map(itemCategory => {
                    return (
                      <ItemCategory
                        itemCategory={itemCategory}
                        key={itemCategory.id}
                      />
                    );
                  })}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          {this.props.clickedCategoryItems.map(item => {
            return <Item item={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryHome);
