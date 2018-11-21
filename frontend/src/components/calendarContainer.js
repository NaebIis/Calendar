import React from "react";
import { connect } from "react-redux";
import dateFns from "date-fns";
import Event from "./event";
import { addEventForm } from "../actions/addEventForm";
import { postEvent } from "../actions/postEvent";
// import { updateState } from "../actions/updateState";
const mapStateToProps = state => {
  return {
    events: state.events,
    addEvent: state.events.addEventForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddEvent: () => dispatch(addEventForm()),
    postEvent: obj => dispatch(postEvent(obj))
    // updateState: obj => dispatch(updateState(obj))
  };
};

class Calendar extends React.Component {
  state = {
    clickedDay: "",
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  clickedDay = event => {
    let day = event.target.parentElement.children[0].id;
    this.setState({
      clickedDay: day
    });
  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={event => {
              this.onDateClick(dateFns.parse(cloneDay));
              this.clickedDay(event);
            }}
          >
            <span id={day} className="day" />
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <div className="con">
              <br />
              <br />
              {this.props.events.events.map(event => {
                return <Event day={day} key={event.id} event={event} />;
              })}
            </div>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState(
      {
        selectedDate: day
      },
      () => this.props.onAddEvent()
    );
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  onSubmitHandler = event => {
    let form = event.target.parentElement;
    let obj = {
      name: form.name.value,
      time: form.time.value,
      address: form.address.value,
      date: form.date.value
    };
    this.props.postEvent(obj);
    // this.props.updateState(obj);
  };

  render() {
    return (
      <div>
        <div className="calendar">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
        </div>
        <div className="addEvent-form">
          {this.props.addEvent ? (
            <form>
              <label>Name:</label>
              <input type="text" name="name" />
              <br />
              <label>Time:</label>
              <input type="text" name="time" />
              <br />
              <label>Address:</label>
              <input type="text" name="address" />
              <input
                type="text"
                name="date"
                defaultValue={this.state.clickedDay}
                hidden
              />
              <input
                type="button"
                value="Submit"
                onClick={this.onSubmitHandler}
              />
            </form>
          ) : null}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
