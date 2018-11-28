import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    events: state.events,
    addEvent: state.events.addEventForm,
    clickedDay: state.events.clickedDay
  };
};
// {this.props.date.getMonth()}
class NotePadDateList extends React.Component {
  renderEvent = () => {
    return <li>{this.props.note.day.slice(0, 11)}</li>;
  };

  render() {
    return this.renderEvent();
  }
}

export default connect(mapStateToProps)(NotePadDateList);
