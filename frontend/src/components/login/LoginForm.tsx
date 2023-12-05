import React from 'react';
import style from './Common.module.scss';


export default function LoginForm() {
  return (
    <div className={`LoginForm ${style.login}`}>
    <h2 className={style.h4}>Login</h2>
    <form className={style.form}>
      <table>
        <tbody>
          <tr>
            <td><label htmlFor="username">Username:</label></td>
            <td><input className={`${style.text_input} ${style.text_area}`} type="text" id="username" name="username" placeholder="Enter your username" /></td>
          </tr>
          <tr>
            <td><label htmlFor="password">Password:</label></td>
            <td><input className={`${style.text_input} ${style.text_area}`} type="password" id="password" name="password" placeholder="Enter your password" /></td>
          </tr>
          <tr>
            <td colSpan={2} align="center"><button className={style.btn} type="submit">Login</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
  )
};

