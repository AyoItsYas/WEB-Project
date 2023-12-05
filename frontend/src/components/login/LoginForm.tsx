import React from 'react';
import styles from './Common.module.scss';


export default function LoginForm() {
  return (
    <form className={styles.LoginForm}>
      <h2>Login</h2>

      <span className={styles.inputRowContainer}>
        <div className={styles.inputRow}>
          <label htmlFor="username">Email</label>
          <input  className={`${styles.textInput} ${styles.textArea}`} type="email" id="username" name="username" placeholder="Enter your username" />
        </div>

        <div className={styles.inputRow}>
          <label htmlFor="password">Password</label>
          <input className={`${styles.textInput} ${styles.textArea}`} type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
      </span>

      <button type="submit">Login</button>
    </form>
  )
};

