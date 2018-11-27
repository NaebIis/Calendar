import React from "react";
import { connect } from "react-redux";
import EventSidebar from "./eventSidebar";
import { editNotes } from "../actions/clickedDayNotes/editNote.js";

const mapDispatchToProps = dispatch => {
  return {
    editClickedDayNotes: (event, id) => dispatch(editNotes(event, id))
  };
};

const mapStateToProps = state => {
  return {
    events: state.events,
    clickedDay: state.events.clickedDay,
    notes: state.clickedDayNotes.notes
  };
};

class NotePad extends React.Component {
  state = {
    // clickedDaysNotes: ""
  };
  componentWillMount() {
    let temp = [];
    let id = undefined;
    // this.props.events.events.map(event => {
    //   if (event.date === this.props.clickedDay) {
    //     temp.push(event.notes + " ");
    //   }
    // });

    // let question = this.props.notes.filter(note => {
    //   return note.day === `${this.props.clickedDay}`;
    // });
    // if (question.length >= 1) {
    //   console.log("true");
    //   temp.push(question[0].notes);
    //   id = question[0].id;
    // this.setState(
    //   {
    //     clickedDaysNotes: temp,
    //     clickedDaysId: id
    //   },
    //   () => console.log(this.state.editClickedDayNotes),
    //   console.log(this.state.editClickedDayId)
    // );
    // } else if (question.length === 0) {
    //   console.log("false");
    //   this.setState({
    //     clickedDaysNotes: "temp",
    //     clickedDaysId: 1
    //   });
    // }

    this.props.notes.map(note => {
      debugger;
      if (note.day === this.props.clickedDay) {
        temp.push(note.notes);
        id = note.id;
      }
      console.log(temp);
    });
    this.setState({
      clickedDaysNotes: temp,
      clickedDaysId: id
    });
  }

  render() {
    return (
      <div>
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
