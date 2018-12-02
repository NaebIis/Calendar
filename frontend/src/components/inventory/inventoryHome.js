import { connect } from "react-redux";
import React from "react";
import Item from "./item";

const mapStateToProps = state => {
  return {
    allItems: state.inventoryItems.inventory_items
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
        <div>
          {this.props.allItems.map(item => {
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
