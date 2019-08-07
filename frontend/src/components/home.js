import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <h1>Welcome to Edges Calendar</h1>
        <h4>Create and track your daily activities and orginize and catalog events.</h4>
        <ul>
          <li>Thing1</li>
          <li>Thing1</li>
          <li>Thing1</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    init: state.events
  };
};

export default connect(mapStateToProps)(Home);
