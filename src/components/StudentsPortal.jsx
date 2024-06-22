import React from "react";
import { Link } from "react-router-dom";
import "./StudentsPortal.css";

const students = [
  { id: 1, name: "Student 1" },
  { id: 2, name: "Student 2" },
  { id: 3, name: "Student 3" },
  { id: 4, name: "Student 4" },
  { id: 5, name: "Student 5" },
  { id: 6, name: "Student 6" },
  { id: 7, name: "Student 7" },
  { id: 8, name: "Student 8" },
];

function StudentsPortal() {
  return (
    <div className="Student">
      <h2>Students Portal</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/student/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsPortal;