import React from "react";
import { connect } from "react-redux";
import EventSidebar from "../events/eventSidebar";
import NotePadDateList from "../notePad/notePadDateList";
import { editNotes } from "../../actions/clickedDayNotes/editNote.js";
import { postClickedDayNote } from "../../actions/clickedDayNotes/postClickedDayNote";
import { getClickedDayNotes } from "../../fetching/fetching";
import { updateClickedDayNote } from "../../actions/clickedDayNotes/updateClickedDayNote";
import { updateClickedDayNoteId } from "../../actions/clickedDayNotes/updateClickedDayNoteId";

const mapDispatchToProps = dispatch => {
  return {
    newTextState: newNotes => dispatch(updateClickedDayNote(newNotes)),
    newTextStateId: newNoteId => dispatch(updateClickedDayNoteId(newNoteId)),
    editClickedDayNotes: (event, id) => dispatch(editNotes(event, id)),
    postClickedDayNote: day => dispatch(postClickedDayNote(day))
  };
};

const mapStateToProps = state => {
  return {
    textId: state.clickedDayNotes.clickedDayNoteId,
    text: state.clickedDayNotes.clickedDayNotes,
    events: state.events,
    clickedDay: state.events.clickedDay,
    notes: state.clickedDayNotes.notes,
    postClickedDayNote: state.postClickedDayNote
  };
};

class NotePad extends React.Component {
  componentWillMount() {
    this.displayedNote();
  }

  displayedNote = () => {
    let clickedDayNote = this.props.notes.find(note => {
      return note.day === `${this.props.clickedDay}`;
    });
    if (clickedDayNote) {
      this.props.newTextState(clickedDayNote.notes);
      this.props.newTextStateId(clickedDayNote.id);
    } else if (!clickedDayNote) {
      this.props.postClickedDayNote(`${this.props.clickedDay}`);
      setTimeout(getClickedDayNotes(), 100);
    }
  };

  render() {
    let temp = this.props.notes.sort(function (a, b) {
      return new Date(b.day) - new Date(a.day);
    });
    return (
      <div>
        <h2 class="currentDay">{this.props.clickedDay.slice(0, 11)}</h2>
        <div className="notePad">
          <textarea
            rows="40"
            cols="45"
            onChange={event => {
              this.props.editClickedDayNotes(event, this.props.textId);
              this.props.newTextState(event.target.value);
            }}
            value={this.props.text}
          />
        </div>
        <div className="todaysNotePad">
          {this.props.events.events.map(event => {
            if (event.date === `${this.props.clickedDay}`) {
              return <EventSidebar key={event.id} event={event} />;
            }
          })}
        </div>
        <div className="NotePadDateList">
          <nav>
            <ul>
              {temp.reverse().map(note => {
                return (
                  <NotePadDateList
                    date={new Date()}
                    key={note.id}
                    note={note}
                  />
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotePad);
