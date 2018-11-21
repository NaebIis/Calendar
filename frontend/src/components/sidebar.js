import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
  }

  render() {
    return (
      <div id="sidebar">
        <div className="toggle-btn" onClick={this.toggleSidebar}>
          {/* <span hidden />
          <span hidden />
          <span hidden /> */}
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
