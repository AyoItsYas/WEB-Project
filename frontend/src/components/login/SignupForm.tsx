import React from 'react';
import styles from './Common.module.scss';

export default function SignupForm() {
  return (
    <div className={styles.LoginForm}>
    <h2>Sign Up</h2>
    <form>
      <table>
        <tbody>
          <tr>
            <td><label htmlFor="fullName">Full Name:</label></td>
            <td><input className={`${styles.textInput} ${styles.textArea}`} type="text" id="fullName" name="fullName" placeholder="Enter your full name" /></td>
          </tr>

          <tr>
            <td><label htmlFor="email">Email:</label></td>
            <td><input className={`${styles.textInput} ${styles.textArea}`} type="email" id="email" name="email" placeholder="Enter your email" /></td>
          </tr>

          <tr>
            <td><label htmlFor="newPassword">New Password:</label></td>
            <td><input className={`${styles.textInput} ${styles.textArea}`} type="password" id="newPassword" name="newPassword" placeholder="Enter a new password" /></td>
          </tr>

          <tr>
            <td colSpan={2} align="center"><button type="submit">Sign Up</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
  )
};