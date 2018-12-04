import { connect } from "react-redux";
import React from "react";
import Item from "./item";
import ItemCategory from "./itemCategory";

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
    //
  };
};

class InventoryHome extends React.Component {
  render() {
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
        <div className="categoryItemsList">
          {this.props.allItemCategories.map(category => {
            if (category.id === this.props.clickedCategory) {
              return <h3>{category.name}</h3>;
            }
          })}
          {this.props.clickedCategoryItems.map(item => {
            return <Item item={item} key={item.id} />;
          })}
        </div>
        <div className="createNewItem">
          <form>
            <h3>Add new Item</h3>
            <br />
            <label>
              Item Name:
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Put In Category:
              <input type="text" name="category" />
            </label>
            <br />
            <input type="submit" value="Create" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryHome);
