import React from "react";
import { connect } from "react-redux";
import { updateNotes } from "../../actions/events/updateNotes.js";
import { deleteEvent } from "../../actions/events/deleteEvent.js";

const mapDispatchToProps = dispatch => {
  return {
    updateNotes: (obj, id) => dispatch(updateNotes(obj, id)),
    deleteEvent: id => dispatch(deleteEvent(id))
  };
};

const mapStateToProps = state => {
  return {
    events: state.events,
    addEvent: state.events.addEventForm,
    clickedDay: state.events.clickedDay
  };
};

class EventSidebar extends React.Component {
  renderEvent = () => {
    return (
      <div>
        <h4>
          {this.props.event.name} {this.props.event.time}{" "}
          <button onClick={() => this.props.deleteEvent(this.props.event.id)}>
            Delete event
          </button>
        </h4>
        <input
          defaultValue={this.props.event.notes}
          onChange={event => this.props.updateNotes(event, this.props.event.id)}
        />
      </div>
    );
  };

  render() {
    return <div>{this.renderEvent()}</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSidebar);
