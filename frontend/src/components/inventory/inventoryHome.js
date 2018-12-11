import { connect } from "react-redux";
import React from "react";
import Item from "./item";
import ItemCategory from "./itemCategory";
import PartyEvent from "../partyEvents/partyEvent";
import createNewInventoryItem from "../../actions/inventory/createNewInventoryItem";
import newItemCategoryIdFunction from "../../actions/inventory/newItemCategoryIdFunction";
import addToPartyEvent from "../../actions/partyEvents/addToPartyEvent";

const mapStateToProps = state => {
  return {
    allItems: state.inventoryItems.inventory_items,
    allItemCategories: state.inventoryItemCategory.inventory_item_categories,
    clickedCategory: state.inventoryItemCategory.clickedItemCategoryName,
    clickedCategoryItems: state.inventoryItemCategory.clickedCategoryItems,
    categoryItemJoin: state.categoryItemJoin.category_item_join,
    newItemCategoryId: state.inventoryItemCategory.newItemCategoryId,
    newItemCategoryName: state.inventoryItems.newItemCategoryName,
    allpartEventItemJoins: state.partEventItemJoins.partEventItemJoins,
    allpartyEvents: state.partyEvents.partyEvents,

    clickedPartyEventName: state.partyEvents.clickedPartyEventName,
    clickedPartyEventItems: state.partyEvents.clickedPartyEventItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewItem: (event, categoryId) =>
      dispatch(createNewInventoryItem(event, categoryId)),
    newItemCategoryIdFunction: (id, name) =>
      dispatch(newItemCategoryIdFunction(id, name)),
    addToPartyEvent: (item, partyEventid) =>
      dispatch(addToPartyEvent(item, partyEventid))
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
                  {this.props.allpartyEvents.map(partyEvent => {
                    return (
                      <PartyEvent partyEvent={partyEvent} key={partyEvent.id} />
                    );
                  })}
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
                return (
                  <li>
                    <Item item={item} key={item.id} />
                    <button
                      onClick={() => {
                        this.props.addToPartyEvent(
                          item,
                          this.props.clickedPartyEventName
                        );
                      }}
                    >
                      Add To Event/Party
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        {/*  */}
        <div className="selectedPartyEventList">
          {this.props.allpartyEvents.map(partyEvent => {
            if (partyEvent.id === this.props.clickedPartyEventName) {
              return <h3>{partyEvent.name}</h3>;
            }
          })}
          <nav>
            <ul>
              {this.props.clickedPartyEventItems.map(item => {
                return (
                  <li>
                    <Item item={item} key={item.id} />
                  </li>
                );
              })}
            </ul>
          </nav>
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
                console.log("=======", this.props.newItemCategoryId);
                this.props.addNewItem(event, this.props.newItemCategoryId);
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
