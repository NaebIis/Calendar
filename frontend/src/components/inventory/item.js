import React from "react";

class Item extends React.Component {
  renderItem = () => {
    return <li>{this.props.item.name}</li>;
  };

  render() {
    return <div>{this.renderItem()}</div>;
  }
}

export default Item;
