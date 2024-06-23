//import React from 'react';
import SideBar from './SideBar'
import StudentCard from './StudentCard';
import './StudentGrid.css'
const students = [
  { id: 1, name: 'Student 1', image: 'https://www.shutterstock.com/image-photo/five-year-old-boy-posing-260nw-2219191675.jpg' },
  { id: 2, name: 'Student 2', image: 'https://www.shutterstock.com/image-photo/five-year-old-boy-posing-260nw-2219191675.jpg' },
  { id: 3, name: 'Student 3', image: 'https://www.shutterstock.com/image-photo/five-year-old-boy-posing-260nw-2219191675.jpg' },
  { id: 4, name: 'Student 4', image: 'https://www.shutterstock.com/image-photo/five-year-old-boy-posing-260nw-2219191675.jpg' },
  { id: 5, name: 'Student 5', image: 'https://www.shutterstock.com/image-photo/five-year-old-boy-posing-260nw-2219191675.jpg' },
  { id: 6, name: 'Student 6', image: 'https://www.shutterstock.com/image-photo/five-year-old-boy-posing-260nw-2219191675.jpg' },
  { id: 7, name: 'Student 7', image: 'https://www.shutterstock.com/image-photo/five-year-old-boy-posing-260nw-2219191675.jpg' },
  { id: 8, name: 'Student 8', image: 'https://www.shutterstock.com/image-photo/five-year-old-boy-posing-260nw-2219191675.jpg' }
];

const StudentGrid = () => {
  return (
    <div>
      <SideBar />
      <div className="main-content">
        <div className="header-container">
        </div>
        <div className="content">
        <div className="container mt-5">
      <div className="row">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
    <button color='green'>Notify Through sms </button>
    <button color='green'>Notify Through Whatsapp</button>
        </div>
      </div>
    </div>
  );
};

export default StudentGrid;
