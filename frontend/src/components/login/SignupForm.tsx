"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Common.module.scss";
import { fetchAPI } from "@/clientUtils";

interface ValidLogin {
  valid: boolean;
  session: string;
}

export default function SignupForm() {
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    let message = "Invalid signup";

    if (data.password !== data.confPassword) {
      return;
    }

    try {
      const login = await fetchAPI<ValidLogin>("/auth/signup", {
        email: data.email,
        password: data.password,
      });

      if (login.valid) {
        document.cookie = "loggedIn=true;max-age=60*1000";
        document.cookie = `session=${login.session};max-age=60*1000`;

        message = "Signup successful";
        router.push("/login");
      }
    } catch (exceptionVar) {
      console.log(exceptionVar);
    }

    const target = event.target as HTMLFormElement;
    const submitButton = target.querySelector("button[type=submit]");

    if (!submitButton) {
      return;
    }

    const originalText = submitButton?.textContent;

    submitButton.innerHTML = message;

    setTimeout(() => {
      submitButton.textContent = originalText;
    }, 2000);

    target.reset();
  }

  return (
    <form className={styles.LoginForm} onSubmit={(e) => handleSubmit(e)}>
      <span className={styles.inputRowContainer}>
        <div className={styles.inputRow}>
          <label htmlFor="email">Email</label>
          <input
            className={`${styles.textInput} ${styles.textArea}`}
            type="email"
            id="email"
            name="email"
            autoComplete="email"
          />
        </div>

        <div className={styles.inputRow}>
          <label htmlFor="password">Password</label>
          <input
            className={`${styles.textInput} ${styles.textArea}`}
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
          />
        </div>

        <div className={styles.inputRow}>
          <label htmlFor="confPassword">Confirm</label>
          <input
            className={`${styles.textInput} ${styles.textArea}`}
            type="password"
            id="confPassword"
            name="confPassword"
            autoComplete="new-password"
          />
        </div>
      </span>

      <button type="submit">Sign Up</button>
    </form>
  );
}
