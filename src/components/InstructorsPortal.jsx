import React from 'react';

const instructors = [
  { id: 1, name: "Instructor1" },
  { id: 2, name: "Instructor2" },

];

function InstructorsPortal() {
  return (
    <div>
      <h2>Instructors Portal</h2>
      <ul>
        {instructors.map(instructor => (
          <li key={instructor.id}>{instructor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default InstructorsPortal;