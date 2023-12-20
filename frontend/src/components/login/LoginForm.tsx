"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Common.module.scss";
import { fetchAPI } from "@/clientUtils";

interface ValidLogin {
  valid: boolean;
  session: string;
}

export default function LoginForm() {
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    let message = "Invalid login";

    try {
      const login = await fetchAPI<ValidLogin>(
        "/auth/login",
        {},
        {
          method: "POST",
          body: JSON.stringify({ email: data.email, password: data.password }),
        },
      );

      if (login.valid) {
        document.cookie = "loggedIn=true;max-age=60*1000";
        document.cookie = `session=${login.session};max-age=60*1000`;

        message = "Login successful";
        router.push("/");
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
          <label htmlFor="username">Email</label>
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
            id="password"
            type="password"
            name="password"
            autoComplete="password"
          />
        </div>
      </span>

      <button type="submit">Login</button>
    </form>
  );
}
