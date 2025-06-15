import React from 'react';
import './StatsCard.css'; // For StatsCard specific styling
import awardBadge from '../assets/award-badge.png'; // For the awards section

function StatsCard({ title, value, isAwards = false }) {
  return (
    <div className="stats-card">
      <div className="info-icon">i</div> {/* Small info icon */}
      <p className="card-title">{title}</p>
      {isAwards ? (
        <div className="awards-content">
          <img src={awardBadge} alt="Award Badge" className="award-badge-icon" />
          <span className="award-count">{value}</span>
          <p className="no-badge-message">No badge found</p>
        </div>
      ) : (
        <p className="card-value">{value}</p>
      )}
    </div>
  );
}

export default StatsCard;