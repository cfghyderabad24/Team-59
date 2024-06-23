// import React from "react";
// import { useParams } from "react-router-dom";

// function StudentPerformance() {
//   const { id } = useParams();
//   // In a real application, you would fetch the student's data based on the id
//   const studentName = `Student ${id}`;

//   // Mock weekly performance data
//   const weeklyPerformance = [
//     { week: 1, score: 85 },
//     { week: 2, score: 90 },
//     { week: 3, score: 88 },
//     { week: 4, score: 92 },
//   ];

//   return (
//     <div className="StudentPerformance">
//       <h2>{studentName}'s Performance</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Week</th>
//             <th>Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {weeklyPerformance.map((week) => (
//             <tr key={week.week}>
//               <td>Week {week.week}</td>
//               <td>{week.score}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default StudentPerformance;
// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const students = [
//     { id: 1, name: "Student 1" },
//     { id: 2, name: "Student 2" },
//     { id: 3, name: "Student 3" },
//     { id: 4, name: "Student 4" },
//     { id: 5, name: "Student 5" },
//     { id: 6, name: "Student 6" },
//     { id: 7, name: "Student 7" },
//     { id: 8, name: "Student 8" },
// ];

// const performanceData = {
//   1: [75, 80, 85, 90, 88, 92, 95],
//   2: [70, 72, 75, 78, 80, 82, 85],
//   3: [80, 90, 100, 78, 80, 92, 75],
//   4: [50, 62, 95, 76, 81, 87, 83],
//   5: [74, 52, 76, 73, 50, 72, 80],
//   6: [80, 75, 35, 68, 84, 92, 67],
//   7: [50, 92, 70, 58, 80, 82, 85],
//   8: [80, 72, 79, 79, 90, 80, 85],
// };

// function ParentsPortal() {
//   const [selectedStudent, setSelectedStudent] = useState("");

//   const handleStudentChange = (e) => {
//     setSelectedStudent(e.target.value);
//   };

//   const chartData = {
//     labels: [
//       "Week 1",
//       "Week 2",
//       "Week 3",
//       "Week 4",
//       "Week 5",
//       "Week 6",
//       "Week 7",
//     ],
//     datasets: [
//       {
//         label: "Performance Score",
//         data: selectedStudent ? performanceData[selectedStudent] : [],
//         borderColor: "rgb(75, 192, 192)",
//         tension: 0.1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//       },
//     },
//   };

//   return (
//     <div>
//       <h2>Parents Portal</h2>
//       <div className="weekly-analysis">
//         <h3>Weekly Performance Analysis</h3>
//         <select value={selectedStudent} onChange={handleStudentChange}>
//           <option value="">Select a student</option>
//           {students.map((student) => (
//             <option key={student.id} value={student.id}>
//               {student.name}
//             </option>
//           ))}
//         </select>
//         {selectedStudent && <Line data={chartData} options={options} />}
//       </div>
//     </div>
//   );
// }

// export default StudentsPerformance;
import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock data for weekly analysis
const weeklyAnalysisData = {
  1: [
    { week: 1, Averagescore: 85 },
    { week: 2, Averagescore: 90 },
    { week: 3, Averagescore: 88 },
    { week: 4, Averagescore: 92 },
    { week: 5, Averagescore: 94 },
    { week: 6, Averagescore: 95 },
    { week: 7, Averagescore: 95 },
  ],
  // Add data for other students...
  2: [
    { week: 1, Averagescore: 85 },
    { week: 2, Averagescore: 90 },
    { week: 3, Averagescore: 88 },
    { week: 4, Averagescore: 92 },
    { week: 5, Averagescore: 94 },
    { week: 6, Averagescore: 95 },
    { week: 7, Averagescore: 95 },
  ],
  3: [
    { week: 1, Averagescore: 85 },
    { week: 2, Averagescore: 90 },
    { week: 3, Averagescore: 88 },
    { week: 4, Averagescore: 92 },
    { week: 5, Averagescore: 94 },
    { week: 6, Averagescore: 95 },
    { week: 7, Averagescore: 95 },
  ],
  4: [
    { week: 1, Averagescore: 85 },
    { week: 2, Averagescore: 90 },
    { week: 3, Averagescore: 88 },
    { week: 4, Averagescore: 92 },
    { week: 5, Averagescore: 94 },
    { week: 6, Averagescore: 95 },
    { week: 7, Averagescore: 95 },
  ],
  5: [
    { week: 1, Averagescore: 85 },
    { week: 2, Averagescore: 90 },
    { week: 3, Averagescore: 88 },
    { week: 4, Averagescore: 92 },
    { week: 5, Averagescore: 94 },
    { week: 6, Averagescore: 95 },
  ],
  6: [
      { week: 1, Averagescore: 85 },
      { week: 2, Averagescore: 90 },
      { week: 3, Averagescore: 88 },
      { week: 4, Averagescore: 92 },
      { week: 5, Averagescore: 94 },
      { week: 6, Averagescore: 95 },
      { week: 7, Averagescore: 95 },
    ],
    7: [
      { week: 1, Averagescore: 85 },
      { week: 2, Averagescore: 90 },
      { week: 3, Averagescore: 88 },
      { week: 4, Averagescore: 92 },
      { week: 5, Averagescore: 94 },
      { week: 6, Averagescore: 95 },
      { week: 7, Averagescore: 95 },
    ],
  8: [
    { week: 1, Averagescore: 85 },
    { week: 2, Averagescore: 90 },
    { week: 3, Averagescore: 88 },
    { week: 4, Averagescore: 92 },
    { week: 5, Averagescore: 94 },
    { week: 6, Averagescore: 95 },
    { week: 7, Averagescore: 95 },
  ],
};

function StudentAnalysis() {
  const { id } = useParams();
  const studentId = parseInt(id);

  const studentName = `Student ${studentId}`;
  const weeklyAnalysis = weeklyAnalysisData[studentId] || [];

  return (
    <div className="StudentAnalysis">
      <h2>{studentName}'s Weekly Analysis</h2>
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Average_Score</th>
          </tr>
        </thead>
        <tbody>
          {weeklyAnalysis.map((week) => (
            <tr key={week.week}>
              <td>Week {week.week}</td>
              <td>{week.Averagescore}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/Students">Back to Students Portal</Link>
    </div>
  );
}

export default StudentAnalysis;