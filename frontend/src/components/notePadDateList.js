import React from "react";
import { connect } from "react-redux";
import { clickedDay } from "../actions/events/clickedDay";
// import ContextMenu from "react-context-menu";

const mapStateToProps = state => {
  return {
    events: state.events,
    addEvent: state.events.addEventForm,
    clickedDay: state.events.clickedDay
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickedDay: day => dispatch(clickedDay(day))
  };
};
// {this.props.date.getMonth()}
class NotePadDateList extends React.Component {
  renderEvent = () => {
    return (
      <li
        id={this.props.note.id}
        className="dateListItem"
        onClick={() => {
          this.props.onClickedDay(this.props.note.day);
        }}
      >
        {this.props.note.day.slice(0, 11)}
      </li>
    );
  };

  render() {
    return this.renderEvent();
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotePadDateList);
