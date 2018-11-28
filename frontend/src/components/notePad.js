import React from "react";
import { connect } from "react-redux";
import EventSidebar from "./eventSidebar";
import { editNotes } from "../actions/clickedDayNotes/editNote.js";
import { postClickedDayNote } from "../actions/clickedDayNotes/postClickedDayNote";
import { getClickedDayNotes } from "../fetching/fetching";

const mapDispatchToProps = dispatch => {
  return {
    editClickedDayNotes: (event, id) => dispatch(editNotes(event, id)),
    postClickedDayNote: day => dispatch(postClickedDayNote(day))
  };
};

const mapStateToProps = state => {
  return {
    events: state.events,
    clickedDay: state.events.clickedDay,
    notes: state.clickedDayNotes.notes,
    postClickedDayNote: state.postClickedDayNote
  };
};

class NotePad extends React.Component {
  state = {
    clickedDaysNotes: ""
  };
  componentWillMount() {
    let tempNotesString = [];
    let id = undefined;
    // this.props.events.events.map(event => {
    //   if (event.date === this.props.clickedDay) {
    //     tempNotesString.push(event.notes + " ");
    //   }
    // });

    let clickedDayNote = this.props.notes.find(note => {
      return note.day === `${this.props.clickedDay}`;
    });
    if (clickedDayNote) {
      tempNotesString.push(clickedDayNote.notes);
      id = clickedDayNote.id;
      this.setState({
        clickedDaysNotes: tempNotesString,
        clickedDaysId: id
      });
    } else if (!clickedDayNote) {
      if (this.props.clickedDay.length >= 10) {
        this.props.postClickedDayNote(this.props.clickedDay);
        getClickedDayNotes();
        setTimeout(() => {
          let clickedDayNote = this.props.notes.find(note => {
            return note.day === `${this.props.clickedDay}`;
          });
          if (clickedDayNote) {
            tempNotesString.push(clickedDayNote.notes);
            id = clickedDayNote.id;
            this.setState({
              clickedDaysNotes: tempNotesString,
              clickedDaysId: id
            });
          }
        }, 1000);
      }
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.clickedDay.slice(0, 11)}</h2>
        <div className="notePad">
          <textarea
            rows="40"
            cols="45"
            defaultValue={this.state.clickedDaysNotes}
            onChange={event =>
              this.props.editClickedDayNotes(event, this.state.clickedDaysId)
            }
          />
        </div>
        <div className="todaysNotePad">
          {this.props.events.events.map(event => {
            if (event.date === `${this.props.clickedDay}`) {
              return <EventSidebar key={event.id} event={event} />;
            }
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotePad);
