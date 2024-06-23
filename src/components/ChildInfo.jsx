// src/components/ChildInfo.jsx

//import React from 'react';
import './ChildInfo.css';
import SideBar from './SideBar';

// Mock data for child information
const childInfo = {
  name: 'John Doe',
  age: 8,
  grade: '3rd Grade',
  teacher: 'Mrs. Smith',
  school: 'XYZ Elementary School',
  address: '123 Main St, Cityville, State, Zip',
  profilePicture: 'https://www.shutterstock.com/image-photo/five-year-old-boy-posing-260nw-2219191675.jpg' // Replace with actual image URL
};

const ChildInfo = () => {
  return (
    <div>
      <SideBar />
      <div className="main-content">
        <div className="header-container">
          <h2>Child Information</h2>
        </div>
        <div className="content">
          <div className="profile-container">
            <img src={childInfo.profilePicture} alt="Profile" className="profile-picture" />
            <div className="child-details">
              <p><strong>Name:</strong> {childInfo.name}</p>
              <p><strong>Age:</strong> {childInfo.age}</p>
              <p><strong>Grade:</strong> {childInfo.grade}</p>
              <p><strong>Teacher:</strong> {childInfo.teacher}</p>
              <p><strong>School:</strong> {childInfo.school}</p>
              <p><strong>Address:</strong> {childInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildInfo;
