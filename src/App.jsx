import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChildInfo from './components/ChildInfo';
import Sidebar from './components/SideBar';
import Attendance from './components/Attendence';
import Activities from './components/Activities';
import './App.css';
import Reviews from './components/Reviews';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<ChildInfo />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/activities" element={<Activities />} />
          <Route path='/reviews' element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
