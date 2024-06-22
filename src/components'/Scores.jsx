import  { useState } from 'react';
import PropTypes from 'prop-types';
import ScoreUpdateForm from './ScoreUpdateForm';
import SideBar from './SideBar';

const Scores = ({ students }) => {
  const [updatingStudentId, setUpdatingStudentId] = useState(null);

  const handleUpdateClick = (studentId) => {
    setUpdatingStudentId(studentId);
  };

  const handleUpdateSubmit = ({ studentId, testName, score }) => {
    console.log(`Updating scores for Student ID ${studentId}: Test Name - ${testName}, Score - ${score}`);
    // Implement logic to update scores (e.g., send to backend)
    setUpdatingStudentId(null); // Reset update state after submission
  };

  return (
    <div>
      <SideBar />
      <div className="main-content">
        <div className="header-container">
        </div>
        <div className="content">
          <h3>Scores Report</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Name</th>
                <th>Score</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    {updatingStudentId === student.id ? (
                      <ScoreUpdateForm studentId={student.id} onSubmit={handleUpdateSubmit} />
                    ) : (
                      <span>Score: {Math.floor(Math.random() * 100)}</span> // Replace with actual score data
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleUpdateClick(student.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Scores.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Scores;
