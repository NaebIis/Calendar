import React from 'react';
import { connect } from "react-redux";
import { postEvent } from "../../actions/events/postEvent";
import { clickedDay } from "../../actions/events/clickedDay";
import EventSidebar from "./eventSidebar";

const mapStateToProps = state => {
  return {
    events: state.events,
    addEvent: state.events.addEventForm,
    clickedDay: state.events.clickedDay
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postEvent: obj => dispatch(postEvent(obj)),
    onClickedDay: day => dispatch(clickedDay(day))
  };
};
class CalendarSideBar extends React.Component {

  onSubmitHandler = event => {
    let form = event.target.parentElement;
    let obj = {
      name: form.name.value,
      time: form.time.value,
      address: form.address.value,
      date: this.props.clickedDay,
      notes: form.notes.value
    };
    form.name.value = '';
    form.time.value = '';
    form.address.value = '';
    form.notes.value = '';
    this.props.postEvent(obj);
  };

  addEventForm = () => {
    return (
      // <div className="addEvent-form">
      <div className="EventSidebar">
        {this.props.addEvent ? (
          <div>
            <form className='addEvent-form'>
              <label >Name:</label>
              <input type="text" name="name" />
              <br />
              <label>Time:</label>
              <input type="text" name="time" />
              <br />
              <label>Address:</label>
              <input type="text" name="address" />
              <br />
              <input type="text" name="notes" />
              <input
                type="button"
                value="Submit"
                onClick={this.onSubmitHandler}
              />
            </form>
            <div className="today">
              <nav>
                <ul>
                  {this.props.events.events.map(event => {
                    return event.date === `${this.props.clickedDay}` ? <EventSidebar key={event.id} event={event} /> : console.log('');
                  })}
                </ul>
              </nav>
            </div>
          </div>
        ) : null}
      </div> 
    );
  };

  render() {
    return this.addEventForm();
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarSideBar);
