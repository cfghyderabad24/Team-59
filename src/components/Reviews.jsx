// src/components/Reviews.jsx

import { useState, useEffect } from 'react';
//import './Reviews.css';
import SideBar from './SideBar';

// Mock data for reviews (you can replace this with actual data fetching from a backend)
const mockReviews = [
  { id: 1, SubjectName: 'Subject 1', review: 'Excellent performance in the last term. Keep it up!' },
  { id: 2, SubjectName: 'Subject 2', review: 'Needs to improve in mathematics. Extra classes recommended.' },
  { id: 3, SubjectName: 'Subject 3', review: 'Good progress in sports activities.' },
  { id: 4, SubjectName: 'Subject 4', review: 'Very punctual and disciplined.' },
  // Add more reviews as needed
];

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a backend
    setReviews(mockReviews);
  }, []);

  return (
<div>
      <SideBar />
      <div className="main-content">
        <div className="header-container">
        </div>
        <div className="content">
        <div>
<SideBar />
<div className="main-content">
  <div className="header-container">
    <h2>Subject Reviews</h2>
  </div>
  <div className="content">
    {reviews.length > 0 ? (
      <table className="table">
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.SubjectName}</td>
              <td>{review.review}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No reviews available.</p>
    )}
  </div>
</div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
