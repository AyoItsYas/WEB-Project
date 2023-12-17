"use client";

import React from "react";

import styles from "./Common.module.scss";

interface LoginData {
  valid: boolean;
}

export default function LoginForm() {
  const [loginData, setLoginData] = React.useState<LoginData>({
    valid: false,
  });

  return (
    <form className={styles.LoginForm}>
      <span className={styles.inputRowContainer}>
        <div className={styles.inputRow}>
          <label htmlFor="username">Email</label>
          <input
            className={`${styles.textInput} ${styles.textArea}`}
            type="email"
            id="username"
            name="username"
          />
        </div>

        <div className={styles.inputRow}>
          <label htmlFor="password">Password</label>
          <input
            className={`${styles.textInput} ${styles.textArea}`}
            id="password"
            type="password"
            name="password"
          />
        </div>
      </span>

      <button type="submit" onClick={() => null}>
        Login
      </button>
    </form>
  );
}
