import React from "react";
import { connect } from "react-redux";
import { clickedDay } from "../actions/events/clickedDay";
import { updateClickedDayNote } from "../actions/clickedDayNotes/updateClickedDayNote";

// import ContextMenu from "react-context-menu";

const mapStateToProps = state => {
  return {
    events: state.events,
    notes: state.clickedDayNotes.notes,
    addEvent: state.events.addEventForm,
    clickedDay: state.events.clickedDay
  };
};

const mapDispatchToProps = dispatch => {
  return {
    text: newNotes => dispatch(updateClickedDayNote(newNotes)),
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
        onClick={event => {
          this.props.onClickedDay(this.props.note.day);
          console.log(
            event.target.parentElement.parentElement.parentElement.parentElement
              .children[1].children[0].value
          );
          this.props.text(this.props.note.notes);
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
