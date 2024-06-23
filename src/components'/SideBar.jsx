//import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import logo from './Images/image.png'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="sidebar-logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/students">My Students</Link></li>
        <li><Link to="/attendance">Post Attendance</Link></li>
        <li><Link to="/scores">Update Scores</Link></li>
        <li><Link to="/reviews">Student Reviews</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;