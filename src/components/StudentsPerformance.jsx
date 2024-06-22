import React from "react";
import { useParams } from "react-router-dom";

function StudentPerformance() {
  const { id } = useParams();
  // In a real application, you would fetch the student's data based on the id
  const studentName = `Student ${id}`;

  // Mock weekly performance data
  const weeklyPerformance = [
    { week: 1, score: 85 },
    { week: 2, score: 90 },
    { week: 3, score: 88 },
    { week: 4, score: 92 },
  ];

  return (
    <div className="StudentPerformance">
      <h2>{studentName}'s Performance</h2>
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {weeklyPerformance.map((week) => (
            <tr key={week.week}>
              <td>Week {week.week}</td>
              <td>{week.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default StudentPerformance;