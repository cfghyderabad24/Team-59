import  { useState, useEffect } from 'react';
import './Attendance.css'; // Add your styles here
import SideBar from './SideBar';
//import attendanceChart from './Images/
const Attendance = () => {
  // Mock attendance data
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a backend
    const fetchData = async () => {
      // Replace with actual API call
      const data = [
        { date: '2024-06-01', status: 'Present' },
        { date: '2024-06-02', status: 'Absent' },
        { date: '2024-06-03', status: 'Present' },
        { date: '2024-06-04', status: 'Present' },
        { date: '2024-06-05', status: 'Absent' }
      ];
      setAttendanceData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <SideBar />
      <div className="main-content">
        <div className="header-container">
        </div>
        <div className="content">
        <div className="attendance-container">
      <h2>Attendance Records</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="attendance-image-container">
          <img src={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7ViDJZjxSuMnSTQdEndlD_4_XJMHXm7MmRgVGFw75111b_PqP"} alt="Attendance Chart" className="attendance-image" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
