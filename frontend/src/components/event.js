import React from "react";

class Event extends React.Component {
  renderEvent = () => {
    if (
      new Date(this.props.event.date).getTime() === this.props.day.getTime()
    ) {
      return (
        <div>
          <h5>
            {this.props.event.name} {this.props.event.time}
          </h5>
        </div>
      );
    } else if (
      new Date(this.props.event.date).getTime() !== this.props.day.getTime()
    ) {
      return <div />;
    }
  };

  render() {
    return <div onClick={this.newEvent}>{this.renderEvent()}</div>;
  }
}

export default Event;
