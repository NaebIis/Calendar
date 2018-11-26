import React from "react";
import { connect } from "react-redux";

class NotePad extends React.Component {
  render() {
    return (
      <div className="notePad">
        <textarea rows="40" cols="45">
          yAAAAAAAAAAs
        </textarea>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    init: state.events
  };
};

export default connect(mapStateToProps)(NotePad);
