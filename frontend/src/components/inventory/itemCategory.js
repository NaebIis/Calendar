import React from "react";
import { connect } from "react-redux";
import editClickedCategory from "../../actions/inventory/updateClickedCategory";

const mapStateToProps = state => {
  return {
    //
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCategoryName: newCategoryId =>
      dispatch(editClickedCategory(newCategoryId))
    //
  };
};

class ItemCategory extends React.Component {
  renderItemCategory = () => {
    return (
      <li
        onClick={() => this.props.editCategoryName(this.props.itemCategory.id)}
      >
        <p>{this.props.itemCategory.name}</p>
      </li>
    );
  };

  render() {
    return this.renderItemCategory();
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCategory);
