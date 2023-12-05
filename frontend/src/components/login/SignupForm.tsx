import React from "react";
import styles from "./Common.module.scss";

export default function SignupForm() {
  return (
    <form className={styles.LoginForm}>
      <span className={styles.inputRowContainer}>
        <div className={styles.inputRow}>
          <label htmlFor='fullName'>Name</label>
          <input
            className={`${styles.textInput} ${styles.textArea}`}
            type='text'
            id='fullName'
            name='fullName'
          />
        </div>

        <div className={styles.inputRow}>
          <label htmlFor='email'>Email</label>
          <input
            className={`${styles.textInput} ${styles.textArea}`}
            type='email'
            id='email'
            name='email'
          />
        </div>

        <div className={styles.inputRow}>
          <label htmlFor='newPassword'>Password</label>
          <input
            className={`${styles.textInput} ${styles.textArea}`}
            type='password'
            id='newPassword'
            name='newPassword'
          />
        </div>
      </span>

      <button type='submit'>Sign Up</button>
    </form>
  );
}
