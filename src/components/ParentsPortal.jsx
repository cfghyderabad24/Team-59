import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

const performanceData = {
  1: [75, 80, 85, 90, 88, 92, 95],
  2: [70, 72, 75, 78, 80, 82, 85],
  3: [80, 90, 100, 78, 80, 92, 75],
  4: [50, 62, 95, 76, 81, 87, 83],
  5: [74, 52, 76, 73, 50, 72, 80],
  6: [80, 75, 35, 68, 84, 92, 67],
  7: [50, 92, 70, 58, 80, 82, 85],
  8: [80, 72, 79, 79, 90, 80, 85],
};

function ParentsPortal() {
  const [selectedStudent, setSelectedStudent] = useState("");

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
  };

  const chartData = {
    labels: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
    ],
    datasets: [
      {
        label: "Performance Score",
        data: selectedStudent ? performanceData[selectedStudent] : [],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div>
      <h2>Parents Portal</h2>
      <div className="weekly-analysis">
        <h3>Weekly Performance Analysis</h3>
        <select value={selectedStudent} onChange={handleStudentChange}>
          <option value="">Select a student</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
        {selectedStudent && <Line data={chartData} options={options} />}
      </div>
    </div>
  );
}

export default ParentsPortal;
