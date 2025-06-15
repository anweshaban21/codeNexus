import React from 'react';
import './ProblemDifficultyBreakdown.css'; // For ProblemDifficultyBreakdown specific styling

function ProblemDifficultyBreakdown({ data }) {
  // const totalProblems = data.easy + data.medium + data.hard;
  const totalProblems = data.totalQuestions;

  // For a more advanced circular chart, you'd use SVG or a charting library.
  // For a simple visual, we can use divs and borders.
  return (
    <div className="problem-breakdown-card">
      {/* You'd typically use a proper charting library for this, like Recharts or Chart.js */}
      {/* For a static visual, consider a simple circle with numbers overlaid. */}
      <div className="circular-chart-placeholder">
        <span className="total-problems-count">{totalProblems}</span>
      </div>
      <div className="difficulty-list">
        <p className="easy"><span className="color-box easy-color"></span> Easy <span>{data.easySolved}</span></p>
        <p className="medium"><span className="color-box medium-color"></span> Medium <span>{data.mediumSolved}</span></p>
        <p className="hard"><span className="color-box hard-color"></span> Hard <span>{data.hardSolved}</span></p>
      </div>
    </div>
  );
}

export default ProblemDifficultyBreakdown;