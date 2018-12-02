import React from "react";
import { connect } from "react-redux";
import { clickedDay } from "../../actions/events/clickedDay";
import { updateClickedDayNote } from "../../actions/clickedDayNotes/updateClickedDayNote";
import { updateClickedDayNoteId } from "../../actions/clickedDayNotes/updateClickedDayNoteId";

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
    text: newNote => dispatch(updateClickedDayNote(newNote)),
    textId: newNoteId => dispatch(updateClickedDayNoteId(newNoteId)),
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
          this.props.text(this.props.note.notes);
          this.props.textId(this.props.note.id);
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
