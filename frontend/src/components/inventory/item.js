import React from "react";

class Item extends React.Component {
  renderItem = () => {
    return (
      <div>
        <li>{this.props.item.name}</li>
      </div>
    );
  };

  render() {
    return <div>{this.renderItem()}</div>;
  }
}

export default Item;
