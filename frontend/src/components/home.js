import React, { useState } from 'react';
import { connect } from "react-redux";
import SevenDayEvents from '../components/home/sevenDayEvents'
import events from '../fetching/fetching'

const mapDispatchToProps = dispatch => {
  return {
    // deleteNote: id => dispatch(deleteDayNote(id)),
  };
};
const mapStateToProps = state => {
  return {
    clickedDayNotes: state.clickedDayNotes,
    events: state.events.events,
  };
};

const Home = () => {
  let [count, setCount] = useState(new Date());
  let [events, setEvent] = useState(state);

  return (
    <div id="home">
      <h1>Welcome to Edges Calendar</h1>
      <h4>
        Create and track your daly activities and orginize and catalog events.
      </h4>
      {events.map((el) => {
        return (
          <div>
            <p>{el.name}</p>
            <p>{el.time}</p>
          </div>
        );
      })}
      <div>
        <div className="homeDayEvents">
          <SevenDayEvents events={this.events} />
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
