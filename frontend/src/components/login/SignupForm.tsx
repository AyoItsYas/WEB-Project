import React from 'react';
import style from './Common.module.scss';

export default function SignupForm() {
  return (
  <div className={`SignupForm ${style.login}`}>
  <h2 className={style.h4}>Sign Up</h2>
  <form className={style.form}>
    <table>
      <tbody>
        <tr>
          <td><label htmlFor="fullName">Full Name:</label></td>
          <td><input className={`${style.text_input} ${style.text_area}`} type="text" id="fullName" name="fullName" placeholder="Enter your full name" /></td>
        </tr>
        <tr>
          <td><label htmlFor="email">Email:</label></td>
          <td><input className={`${style.text_input} ${style.text_area}`} type="email" id="email" name="email" placeholder="Enter your email" /></td>
        </tr>
        <tr>
          <td><label htmlFor="newPassword">New Password:</label></td>
          <td><input className={`${style.text_input} ${style.text_area}`} type="password" id="newPassword" name="newPassword" placeholder="Enter a new password" /></td>
        </tr>
        <tr>
          <td colSpan={2} align="center"><button className={style.btn} type="submit">Sign Up</button></td>
        </tr>
      </tbody>
    </table>
  </form>
</div>
)
};