import React from 'react';
import style from './Common.module.scss';

export default () => (
  <div className="SignupForm">
    <h2>Sign Up</h2>
    <form>
      <label htmlFor="fullName">Full Name:</label>
      <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" />

      <label htmlFor="newPassword">New Password:</label>
      <input type="password" id="newPassword" name="newPassword" placeholder="Enter a new password" />

      <button type="submit">Sign Up</button>
    </form>
  </div>
);
