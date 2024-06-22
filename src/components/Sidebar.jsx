import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from './images/logo.jpg'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="sidebar-logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/schemes">Schemes</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/visit">Plan a Visit</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
