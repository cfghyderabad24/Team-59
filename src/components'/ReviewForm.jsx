import { useState } from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar';
const ReviewForm = ({ students, onSubmit }) => {
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedStudentId && review.trim()) {
      const selectedStudent = students.find(student => student.id === parseInt(selectedStudentId));
      onSubmit({ studentId: selectedStudent.id, review });
      setSelectedStudentId('');
      setReview('');
    }
  };

  return (
    <div>
      <SideBar />
      <div className="main-content">
        <div className="header-container">
        </div>
        <div className="content">
        <div>
      <h3>Submit a Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="student">Select Student:</label>
          <select
            id="student"
            className="form-control"
            value={selectedStudentId}
            onChange={(e) => setSelectedStudentId(e.target.value)}
          >
            <option value="">Select a student</option>
            {students.map(student => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            className="form-control"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="4"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Submit Review</button>
      </form>
    </div>

        </div>
      </div>
    </div>
  );
};

ReviewForm.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ReviewForm;
