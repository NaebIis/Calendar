import React from "react";
import { connect } from "react-redux";
import EventSidebar from "./eventSidebar";

const mapStateToProps = state => {
  return {
    events: state.events,
    clickedDay: state.events.clickedDay,
    notes: state.clickedDayNotes.notes
  };
};

class NotePad extends React.Component {
  componentWillMount() {
    let temp = [];
    // this.props.events.events.map(event => {
    //   if (event.date === this.props.clickedDay) {
    //     temp.push(event.notes + " ");
    //   }
    // });
    this.props.notes.map(note => {
      if (note.day === this.props.clickedDay) {
        temp.push(note.notes);
      }
    });
    this.setState({
      clickedDaysNotes: temp
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

export default connect(mapStateToProps)(NotePad);
