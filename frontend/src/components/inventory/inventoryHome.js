import { connect } from "react-redux";
import React from "react";
import Item from "./item";
import ItemCategory from "./itemCategory";
import createNewInventoryItem from "../../actions/inventory/createNewInventoryItem";
import newItemCategoryIdFunction from "../../actions/inventory/newItemCategoryIdFunction";

const mapStateToProps = state => {
  return {
    allItems: state.inventoryItems.inventory_items,
    allItemCategories: state.inventoryItemCategory.inventory_item_categories,
    clickedCategory: state.inventoryItemCategory.clickedItemCategoryName,
    clickedCategoryItems: state.inventoryItemCategory.clickedCategoryItems,
    categoryItemJoin: state.categoryItemJoin.category_item_join,
    newItemCategoryId: state.inventoryItems.newItemCategoryId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewItem: event => dispatch(createNewInventoryItem(event)),
    newItemCategoryIdFunction: event =>
      dispatch(newItemCategoryIdFunction(event))
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
          <form id="addItemForm">
            <h3>Add new Item</h3>
            <br />
            <label>
              Item Name:
              <input type="text" name="name" />
            </label>
            <br />
            <input hidden name="category" id={this.props.newItemCategoryId} />
            <div className="createNewItemCatSelect">
              <nav role="navigation">
                <ul>
                  <li>
                    Add To Category
                    <ul class="dropdown">
                      {this.props.allItemCategories.map(itemCategory => {
                        return (
                          <li
                            id={itemCategory.id}
                            onClick={event => {
                              let id = event.target.id;
                              console.log(id);
                              this.props.newItemCategoryIdFunction(id);
                            }}
                          >
                            {itemCategory.name}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <br />
            <input
              id="addItemFormCreateButton"
              type="submit"
              value="Create"
              onClick={event => {
                this.props.addNewItem(event);
                this.props.newItemCategoryIdFunction(null);
                event.target.parentElement.children[2].children[0].value = "";
              }}
            />
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
