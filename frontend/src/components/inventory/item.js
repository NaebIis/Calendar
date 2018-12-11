import React from "react";

class Item extends React.Component {
  renderItem = () => {
    return this.props.item.name;
  };

  render() {
    return this.renderItem();
  }
}

export default Item;
