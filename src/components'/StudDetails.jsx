import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReviewForm from './ReviewForm';
import SideBar from './SideBar';

const StudDetails = ({ students }) => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const foundStudent = students.find(student => student.id === parseInt(id));
    setStudent(foundStudent);
    if (!foundStudent) {
      console.error(`Student with id ${id} not found`);
    }
  }, [id, students]);

  const handleReviewSubmit = (reviewData) => {
    setReviews([...reviews, reviewData]);
  };

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SideBar />
      <div className="main-content">
        <div className="header-container">
          <h2>{student.name}&apos;s Details</h2>
        </div>
        <div className="content">
          <h3>Reviews</h3>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review.review}</li>
            ))}
          </ul>
          <h3>Submit a Review</h3>
          <ReviewForm students={students} onSubmit={handleReviewSubmit} />
        </div>
      </div>
    </div>
  );
};

StudDetails.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StudDetails;
