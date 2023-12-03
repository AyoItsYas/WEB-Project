import React from 'react';
import style from './Common.module.scss';


export default () => (
  <div className="LoginForm">
    <h2>Login</h2>
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="Enter your username" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Enter your password" />

      <button type="submit">Login</button>
    </form>
  </div>
);

