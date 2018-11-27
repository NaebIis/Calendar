import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

class NotePad extends React.Component {
  state = {
    clickedDaysNotes: []
  };

  componentWillMount() {
    let temp = [];
    this.props.events.events.map(event => {
      temp.push(event.notes);
    });
    this.setState(
      {
        clickedDaysNotes: temp
      },
      () => console.log(this.state.clickedDaysNotes)
    );
  }

  render() {
    return (
      <div className="notePad">
        <textarea
          rows="40"
          cols="45"
          // onClick={() => this.onRender()}
          defaultValue={this.state.clickedDaysNotes}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(NotePad);
