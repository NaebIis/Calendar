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
    newItemCategoryId: state.inventoryItems.newItemCategoryId,
    newItemCategoryName: state.inventoryItems.newItemCategoryName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewItem: event => dispatch(createNewInventoryItem(event)),
    newItemCategoryIdFunction: (id, name) =>
      dispatch(newItemCategoryIdFunction(id, name))
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
                <ul id="dropdown">
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
              <li>
                Party/events
                <ul id="dropdown">
                  <li className="DDL">Sub-Thing1</li>
                  <li className="DDL">Sub-Thing2</li>
                  <li className="DDL">Sub-Thing3</li>
                </ul>
              </li>
              <li>
                Thing2
                <ul id="dropdown">
                  <li className="DDL">Sub-Thing1</li>
                  <li className="DDL">Sub-Thing2</li>
                  <li className="DDL">Sub-Thing3</li>
                </ul>
              </li>
              <li>
                Thing3
                <ul id="dropdown">
                  <li className="DDL">Sub-Thing1</li>
                  <li className="DDL">Sub-Thing2</li>
                  <li className="DDL">Sub-Thing3</li>
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
          <nav>
            <ul>
              {this.props.clickedCategoryItems.map(item => {
                return <Item item={item} key={item.id} />;
              })}
            </ul>
          </nav>
        </div>
        {/*  */}
        <div className="selectedPartyEventList">
          {this.props.allItemCategories.map(category => {
            if (category.id === this.props.clickedCategory) {
              return <h3>{category.name}</h3>;
            }
          })}
          <nav>
            <ul>
              {this.props.clickedCategoryItems.map(item => {
                return <Item item={item} key={item.id} />;
              })}
            </ul>
          </nav>
        </div>
        {/*  */}
        <div id="instructions">
          <h2>Page Instructions</h2>
          <p>
            On this page you can add new items you might want to keep instorage
            and sort said items be category.
          </p>
          <br />
          <p>
            More attrubutes could be added to the object that allows for a
            location or aisle number.
          </p>
          <br />
          <p>After adding a new item scroll to the bottom of the items list.</p>
        </div>
        <div id="createNewPartyEvent">
          <form id="addItemPartyEventForm">
            <h3>Create New Event</h3>
            <br />
            <label>
              Event Name:
              <input type="text" name="name" />
            </label>
            <input
              id="addPartyEventFormCreateButton"
              type="submit"
              value="Create"
            />
          </form>
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
            <lable>Selected Category:</lable>
            <h4 name="category" id={this.props.newItemCategoryId} />
            <div className="createNewItemCatSelect">
              <nav role="navigation">
                <ul>
                  <li>
                    Add To Category
                    <ul id="dropdown">
                      {this.props.allItemCategories.map(itemCategory => {
                        return (
                          <li
                            id={itemCategory.id}
                            onClick={event => {
                              let id = event.target.id;
                              let name = itemCategory.name;
                              event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[5].innerHTML = `${name}`;
                              this.props.newItemCategoryIdFunction(id, name);
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
