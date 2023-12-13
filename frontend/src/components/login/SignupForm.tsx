"use client";
import React, { useState } from "react";
import styles from "./Common.module.scss";
import { useRouter } from "next/navigation";
import { useAPI } from "@/utils";

export default function SignupForm() {
  // const router = useRouter();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");

  // const handleSignup = async (event: { preventDefault: () => void; }) => {
  //   event.preventDefault();

  //   try {
  //     const response = useAPI('signup.php', {
  //       email,
  //       password,
  //       name,
  //     });

  //     if (response) {
  //       console.log('Signup successful:', response);
  //       router.push('/product');
  //     } else {
  //       console.error('Signup failed');
  //     }
  //   } catch (error) {
  //     console.error('Error during signup:', error);
  //   }
  // };

  return (
    <form className={styles.LoginForm}>
      <span className={styles.inputRowContainer}>
        <div className={styles.inputRow}>
          <label htmlFor="fullName">Name</label>
          <input
            className={`${styles.textInput} ${styles.textArea}`}
            type="text"
            id="fullName"
            name="fullName"
          />
        </div>

        <div className={styles.inputRow}>
          <label htmlFor="email">Email</label>
          <input
            className={`${styles.textInput} ${styles.textArea}`}
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div className={styles.inputRow}>
          <label htmlFor="newPassword">Password</label>
          <input
            className={`${styles.textInput} ${styles.textArea}`}
            type="password"
            id="newPassword"
            name="newPassword"
          />
        </div>
      </span>

      <button type="submit">Sign Up</button>
    </form>
  );
}
