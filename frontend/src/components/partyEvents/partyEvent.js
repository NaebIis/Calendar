import React from "react";
import { connect } from "react-redux";
import editClickedPartyEvent from "../../actions/partyEvents/updatePartyEvent";
import { getPartyEvents } from "../../fetching/fetching"

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
    editPartyEventName: newCategoryId =>
      dispatch(editClickedPartyEvent(newCategoryId))
    //
  };
};

class PartyEvent extends React.Component {
  renderpartyEvent = () => {
    let id = this.props.partyEvent.id;
    return (
      <li
        onClick={() => {
          getPartyEvents()
          this.props.editPartyEventName(id);
        }}
      >
        {this.props.partyEvent.name}
      </li>
    );
  };

  render() {
    return <div>{this.renderpartyEvent()}</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartyEvent);
