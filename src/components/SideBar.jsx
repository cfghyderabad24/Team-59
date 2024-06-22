import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import logo from './Images/image.png'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="sidebar-logo" />
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/Students">Students</Link>
        </li>
        <li>
          <Link to="/Instructors">Instructors</Link>
        </li>
        <li>
          <Link to="/visits">Visit</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
