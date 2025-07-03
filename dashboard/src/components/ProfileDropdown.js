
import React from 'react';
import './ProfileDropdown.css'; 

const ProfileDropdown = ({ onLogout }) => {
  return (
    <div className="profile-dropdown">
      <ul>
        <li><a href="#">My Profile</a></li>
        <li><a href="#">Settings</a></li>
        <li onClick={onLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
