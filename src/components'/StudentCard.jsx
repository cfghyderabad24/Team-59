//import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './StudentCard.css';

const StudentCard = ({ student }) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={student.image} className="card-img-top" alt={student.name} />
        <div className="card-body">
          <h5 className="card-title">{student.name}</h5>
          <Link to={`/student/${student.id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

StudentCard.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default StudentCard;
