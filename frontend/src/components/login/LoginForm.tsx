"use client";

// import React, { useEffect, useState } from "react";
import React from "react";
// import { useAPI } from "@/utils";
// import { useRouter } from "next/navigation";

import styles from "./Common.module.scss";

// import Cookies from "js-cookie";

interface LoginData {
  valid: boolean;
}

export default function LoginForm() {
  // const router = useRouter();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function handleLogin() {
  //   const response = fetch(
  //     "/api/login?email=" + email + "&password=" + password,
  //   );

  //   response
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (isLoginData(data)) {
  //         if (data.valid) {
  //           Cookies.set("isLoggedIn", "true");
  //           Cookies.set("lastLoginTime", new Date().getTime().toString());
  //           router.push("/dashboard");
  //         } else {
  //           console.log("Invalid login credentials.");
  //         }
  //       }
  //     });
  // }

  // function isLoginData(data: any): data is LoginData {
  //   return typeof data === "object" && "valid" in data;
  // }

  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   handleLogin();
  // }

  // function onSessionExpired() {
  //   const isLoggedIn = Cookies.get("isLoggedIn");
  //   const lastLoginTime = Cookies.get("lastLoginTime");

  //   if (isLoggedIn && lastLoginTime) {
  //     const currentTime = new Date().getTime();
  //     const elapsedTime = currentTime - parseInt(lastLoginTime);

  //     if (elapsedTime > 7 * 24 * 60 * 60 * 1000) {
  //       console.log("Session expired. Please log in again.");
  //       Cookies.remove("isLoggedIn");
  //       Cookies.remove("lastLoginTime");
  //     }
  //   }
  // }

  // useEffect(onSessionExpired, []);

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
