import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import ParentsPortal from './components/ParentsPortal';
import StudentsPortal from './components/StudentsPortal';
import InstructorsPortal from './components/InstructorsPortal';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>NGO Admin Dashboard</h1>
        </header>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/parents">Parents</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/instructors">Instructors</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/parents" element={<ParentsPortal />} />
            <Route path="/students" element={<StudentsPortal />} />
            <Route path="/instructors" element={<InstructorsPortal />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;