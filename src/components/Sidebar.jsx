import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";
import "../styles/components/Sidebar.css";

function Sidebar({ labName = "Lab name" }) {
  Sidebar.propTypes = {
    labName: PropTypes.string,
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <h4>{labName}</h4>
      </div>

      <div className="nav flex-column">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/outsource-request"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Outsource request
        </NavLink>
        <NavLink
          to="/sample-management"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Sample management
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Settings
        </NavLink>
      </div>

      <div className="nav flex-column mt-4">
        <h6 className="section-title">Customer support</h6>
        <NavLink
          to="/feedback"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Feedback
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
