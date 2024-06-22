//import React from 'react';
import SideBar from './SideBar'
import StudentCard from './StudentCard';
import './StudentGrid.css'
const students = [
  { id: 1, name: 'Student 1', image: 'path/to/image1.jpg' },
  { id: 2, name: 'Student 2', image: 'path/to/image2.jpg' },
  { id: 3, name: 'Student 3', image: 'path/to/image3.jpg' },
  { id: 4, name: 'Student 4', image: 'path/to/image4.jpg' },
  { id: 5, name: 'Student 5', image: 'path/to/image5.jpg' },
  { id: 6, name: 'Student 6', image: 'path/to/image6.jpg' },
  { id: 7, name: 'Student 7', image: 'path/to/image7.jpg' },
  { id: 8, name: 'Student 8', image: 'path/to/image8.jpg' }
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
        </div>
      </div>
    </div>
  );
};

export default StudentGrid;
