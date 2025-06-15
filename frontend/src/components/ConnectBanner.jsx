import React from 'react';
import './ConnectBanner.css'; // For ConnectBanner specific styling
import puzzleIcon from '../assets/puzzle-icon.png'; // Puzzle icon
import owlIcon from '../assets/owl-icon.png'; // Owl icon

function ConnectBanner() {
  return (
    <div className="connect-banner">
      <div className="banner-left">
        <img src={puzzleIcon} alt="Puzzle Pieces" className="puzzle-icon" />
        <div className="text-content">
          <h2>Showcase Your Problem-Solving Skills</h2>
          <p>Connect your DSA and competitive profiles to centralize your achievements and stats.</p>
        </div>
      </div>
      <button className="connect-button">Connect</button>
      <img src={owlIcon} alt="Owl" className="owl-icon" />
    </div>
  );
}

export default ConnectBanner;