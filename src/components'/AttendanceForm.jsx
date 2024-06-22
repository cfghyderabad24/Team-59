import  { useState } from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar';
const AttendanceForm = ({ students, onSubmit }) => {
  const [attendance, setAttendance] = useState(students.reduce((acc, student) => {
    acc[student.id] = { present: false }; // Initialize attendance as false for each student
    return acc;
  }, {}));

  const handleChange = (studentId) => {
    setAttendance(prevState => ({
      ...prevState,
      [studentId]: {
        ...prevState[studentId],
        present: !prevState[studentId].present // Toggle attendance status
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedAttendance = students.map(student => ({
      serialNo: student.id,
      name: student.name,
      present: attendance[student.id].present
    }));
    if (onSubmit) {
      onSubmit(formattedAttendance);
    }
  };

  return (
    <div>
      <SideBar />
      <div className="main-content">
        <div className="header-container">
        </div>
        <div className="content">
        
    
    <h3>Mark Attendance</h3>
    <form onSubmit={handleSubmit}>
      <table className="table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={attendance[student.id].present}
                  onChange={() => handleChange(student.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit" className="btn btn-primary mt-3">Submit Attendance</button>
    </form>
  </div>
  <div>
        </div>
      </div>
    </div>
  );
};

AttendanceForm.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AttendanceForm;
