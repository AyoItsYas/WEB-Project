import React from 'react';
import styles from './Common.module.scss';


export default function LoginForm() {
  return (
    <div className={styles.LoginForm}>
    <h2>Login</h2>

    <form>
      <table>
        <tbody>
          <tr>
            <td><label htmlFor="username">Username:</label></td>
            <td><input  className={`${styles.textInput} ${styles.textArea}`} type="text" id="username" name="username" placeholder="Enter your username" /></td>
          </tr>

          <tr>
            <td><label htmlFor="password">Password:</label></td>
            <td><input className={`${styles.textInput} ${styles.textArea}`} type="password" id="password" name="password" placeholder="Enter your password" /></td>
          </tr>

          <tr>
            <td colSpan={2} align="center"><button type="submit">Login</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
  )
};

