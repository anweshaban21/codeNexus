import React from 'react';
import './UserProfile.css'; // For UserProfile specific styling
import editIcon from '../assets/edit-icon.png'; // Edit icon
import mailIcon from '../assets/mail-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import githubIcon from '../assets/github-icon.png';
import websiteIcon from '../assets/website-icon.png';
import locationIcon from '../assets/location-icon.png';
import universityIcon from '../assets/university-icon.png';
import cardIcon from '../assets/card-icon.png'; // Icon for 'Get your Codolio Card'

function UserProfile({ user }) {
  return (
    <div className="user-profile-card">
      <div className="profile-header">
        <label className="public-profile-toggle">
          <input type="checkbox" defaultChecked />
          <span className="slider round"></span>
          <span>Public Profile</span>
        </label>
        <img src={editIcon} alt="Edit Profile" className="edit-icon" />
      </div>

      <div className="profile-main">
        <img src={user.profilePicture} alt={user.name} className="profile-picture" />
        <h3>{user.name}</h3>
        <p className="username">{user.username}</p>
        <button className="get-card-button">
          Get your Codolio Card <img src={cardIcon} alt="Card Icon" />
        </button>
      </div>

      <div className="social-links">
        <a href={user.socialLinks.email}><img src={mailIcon} alt="Email" /></a>
        <a href={user.socialLinks.linkedin}><img src={linkedinIcon} alt="LinkedIn" /></a>
        <a href={user.socialLinks.github}><img src={githubIcon} alt="GitHub" /></a>
        <a href={user.socialLinks.website}><img src={websiteIcon} alt="Website" /></a>
      </div>

      <div className="location-university">
        <p><img src={locationIcon} alt="Location" /> {user.location}</p>
        <p><img src={universityIcon} alt="University" /> {user.university}</p>
      </div>
    </div>
  );
}

export default UserProfile;