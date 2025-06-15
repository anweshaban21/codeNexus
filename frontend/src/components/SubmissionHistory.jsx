import React from 'react';
import './SubmissionHistory.css'; // For SubmissionHistory specific styling

function SubmissionHistory({ data }) {
  const months = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']; // Order as in screenshot

  return (
    <div className="submission-history-card">
      <div className="info-icon">i</div>
      <p className="card-title">0 submissions in past 6 months</p> {/* This text updates based on total */}
      <div className="submission-grid">
        {months.map(month => (
          <div key={month} className="month-column">
            <div
              className="submission-bar"
              style={{ height: `${data[month] * 2 + 5}px` }} // Example: Scale bar height (adjust as needed)
              title={`${data[month]} submissions in ${month}`}
            ></div>
            <span className="month-label">{month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubmissionHistory;