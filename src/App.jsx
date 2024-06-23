<<<<<<< HEAD
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentGrid from './components\'/StudentGrid';
import SideBar from "./components'/SideBar";
import StudDetails from "./components'/StudDetails"
import AttendanceForm from "./components'/AttendanceForm";
import Scores from "./components'/Scores";
import ReviewForm from './components\'/ReviewForm';
function App() {
  const [students] = useState([
    { id: 1, name: 'Student 1' },
    { id: 2, name: 'Student 2' },
    { id: 3, name: 'Student 3' },
    { id: 4, name: 'Student 4' },
    { id: 5, name: 'Student 5' },
    { id: 6, name: 'Student 6' },
    { id: 7, name: 'Student 7' },
    { id: 8, name: 'Student 8' },
  ]);

  const handleAttendanceSubmit = (attendanceData) => {
    console.log('Attendance Data:', attendanceData);
  };
  return (
    <Router>
      <div className='fixed-top'>
      <SideBar />
      </div>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<StudentGrid />} />
          <Route path="/student/:id" element={<StudDetails />} />
          <Route path='/students' element={<StudentGrid/>}/>
          <Route path="/attendance" element={<AttendanceForm students={students} onSubmit={handleAttendanceSubmit} />}   />
          <Route
              path="/scores"
              element={<Scores students={students} />} // Pass students to Scores component
            />          
           <Route path="/scores" element={<Scores students={students} />} />
           <Route path='/reviews' element={<ReviewForm students={students} />} />
            </Routes>
      </div>
    </Router>
    
  );
}

=======
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import StudentsPortal from "./components/StudentsPortal";
import InstructorsPortal from "./components/InstructorsPortal";
// import VisitsPortal from "./components/VisitsPortal";
import EventsPortal from "./components/EventsPortal";
import StudentAnalysis from "./components/StudentAnalysis";
import SideBar from "./components/SideBarA";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <header className="fixed-top">
          
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentsPortal />} />
            <Route path="/instructors" element={<InstructorsPortal />} />
            {/* <Route path="/visits" element={<VisitsPortal />} />  */}
            <Route path="/events" element={<EventsPortal />} />
            <Route path="/student/:id" element={<StudentAnalysis />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}
>>>>>>> feature-admin
export default App;
