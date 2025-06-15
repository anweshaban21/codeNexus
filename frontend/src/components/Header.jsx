import React from 'react';
import './Header.css'; // For Header specific styling
import profileIcon from '../assets/profile-icon.png'; // Placeholder if you have one
import notificationIcon from '../assets/notification-icon.png'; // Placeholder

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/codolio-logo.png" alt="Codolio Logo" /> {/* Replace with your logo path */}
        <span>Codolio</span>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#">Leaderboard</a></li>
          <li><a href="#">Question Tracker</a></li>
          <li><a href="#">Event Tracker</a></li>
          <li><a href="#" className="active">Profile Tracker</a></li>
        </ul>
      </nav>
      <div className="user-icons">
        <img src={notificationIcon} alt="Notifications" className="icon" />
        <img src={profileIcon} alt="User Profile" className="icon" />
        <div className="dropdown-arrow"></div> {/* A small arrow for dropdown */}
      </div>
    </header>
  );
}

export default Header;