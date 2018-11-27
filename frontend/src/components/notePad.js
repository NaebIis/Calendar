import React from "react";
import { connect } from "react-redux";

class NotePad extends React.Component {
  state = {
    clickedDaysNotes: ""
  };

  componentWillMount() {
    let temp = "";
    this.props.events.events.map(event => {
      return temp + " " + event.notes;
    });
    this.setState({
      clickedDaysNotes: temp
    });
  }

  render() {
    return (
      <div className="notePad">
        <textarea
          rows="40"
          cols="45"
          defaultValue={this.state.clickedDaysNotes}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default connect(mapStateToProps)(NotePad);
