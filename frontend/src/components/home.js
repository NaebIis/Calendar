import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Wellcome to my app</h1>
        <h4>You have these events comeing up!</h4>
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
    init: state.init_state.events
  };
};

export default connect(mapStateToProps)(Home);
