import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import StudentsPortal from "./components/StudentsPortal";
import InstructorsPortal from "./components/InstructorsPortal";
// import VisitsPortal from "./components/VisitsPortal";
import EventsPortal from "./components/EventsPortal";
import StudentsPerformance from "./components/StudentsPerformance";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <header className="fixed-top">
          <h1>NGO Admin Dashboard</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentsPortal />} />
            <Route path="/instructors" element={<InstructorsPortal />} />
            {/* <Route path="/visits" element={<VisitsPortal />} />  */}
            <Route path="/events" element={<EventsPortal />} />
            <Route path="/students/:id" element={<StudentsPerformance />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
