import React from "react";
import { connect } from "react-redux";
import dateFns from "date-fns";
import Event from "./event";
// import { addEventForm } from "../../actions/events/addEventForm";
import { postEvent } from "../../actions/events/postEvent";
import { clickedDay } from "../../actions/events/clickedDay";
// import AddEventForm from "./calendarSideBar";
import CalendarSideBar from "./calendarSideBar";
// import EventSidebar from "./eventSidebar";

const mapStateToProps = state => {
  return {
    events: state.events,
    // addEvent: state.events.addEventForm,
    clickedDay: state.events.clickedDay
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onAddEvent: () => dispatch(addEventForm()),
    postEvent: obj => dispatch(postEvent(obj)),
    onClickedDay: day => dispatch(clickedDay(day))
  };
};

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };
  
  testing(input, day) {
    return input.map(event => {
      return <Event day={day} key={event.id} event={event} />;
    })
  }

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
              {this.testing(this.props.events.events, day)}
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
      // () => this.props.onAddEvent()
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

  clickedDay = event => {
    let day = event.target.parentElement.children[0].id;
    this.props.onClickedDay(day);
  };

  render() {
    return (
      <div>
        <div className="calendar">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
        </div>
        {<CalendarSideBar />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
