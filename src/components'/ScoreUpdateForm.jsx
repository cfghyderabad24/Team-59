import { useState } from 'react';
import PropTypes from 'prop-types';

const ScoreUpdateForm = ({ studentId, onSubmit }) => {
  const [testName, setTestName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ studentId, testName, score });
      setTestName('');
      setScore('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-inline-block">
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Test Name"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="number"
          className="form-control"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">Submit</button>
    </form>
  );
};

ScoreUpdateForm.propTypes = {
  studentId: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ScoreUpdateForm;
