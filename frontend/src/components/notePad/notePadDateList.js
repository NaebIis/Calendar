import React from "react";
import { connect } from "react-redux";
import { clickedDay } from "../../actions/events/clickedDay";
import { updateClickedDayNote } from "../../actions/clickedDayNotes/updateClickedDayNote";
import { updateClickedDayNoteId } from "../../actions/clickedDayNotes/updateClickedDayNoteId";
import { deleteDayNote } from "../../actions/clickedDayNotes/deleteDayNote"
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
    deleteNote: id => dispatch(deleteDayNote(id)),
    text: newNote => dispatch(updateClickedDayNote(newNote)),
    textId: (allNoteIds, newNoteId) => dispatch(updateClickedDayNoteId(allNoteIds, newNoteId)),
    onClickedDay: day => dispatch(clickedDay(day))
  };
};

class NotePadDateList extends React.Component {
  renderEvent = () => {
    let date = this.props.note.day === undefined ? "broken" : this.props.note.day.slice(0, 11)
    return (
      <li
        id={this.props.note.id}
        className="dateListItem"
        onClick={() => {
          this.props.onClickedDay(this.props.note.day);
          this.props.textId(this.props.notes, this.props.note.id);
          this.props.text(this.props.note.notes);
        }}
      >
        {date}
        <button className="xButton" onClick={() => {
          this.props.deleteNote(this.props.note.id)
        }}>x</button>
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



