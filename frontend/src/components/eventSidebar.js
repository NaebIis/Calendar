import React from "react";

class EventSidebar extends React.Component {
  renderEvent = () => {
    return (
      <div>
        <h4>
          {this.props.event.name} {this.props.event.time} <button>save</button>
        </h4>
        <textarea value={this.props.event.notes} />
      </div>
    );
  };

  render() {
    return <div onClick={this.newEvent}>{this.renderEvent()}</div>;
  }
}

export default EventSidebar;
