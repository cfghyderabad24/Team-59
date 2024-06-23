import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import StudentsPortal from "./components/StudentsPortal";
import InstructorsPortal from "./components/InstructorsPortal";
// import VisitsPortal from "./components/VisitsPortal";
import EventsPortal from "./components/EventsPortal";
import StudentAnalysis from "./components/StudentAnalysis";
import SideBar from "./components/SideBar";
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
export default App;
