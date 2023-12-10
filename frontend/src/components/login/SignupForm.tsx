import React, { useState } from 'react';
import styles from './Common.module.scss';
import { useRouter } from 'next/router';

export default function SignupForm() {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

   
    try {                            //idk the pathing
      const response = await fetch('/signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }), 
      });

      if (response.ok) {
        const responseData = await response.json();
        

                      //idk the pathing
        router.push('/product');
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <form  className={styles.LoginForm}>
      <h2>Sign Up</h2>

      <span className={styles.inputRowContainer}>
        <div className={styles.inputRow}>
          <label htmlFor="fullName">Name</label>
          <input className={`${styles.textInput} ${styles.textArea}`} type="text" id="fullName" name="fullName" placeholder="Enter your name" />
        </div>

        <div className={styles.inputRow}>
          <label htmlFor="email">Email</label>
          <input className={`${styles.textInput} ${styles.textArea}`} type="email" id="email" name="email" placeholder="Enter your email" />
        </div>

        <div className={styles.inputRow}>
          <label htmlFor="newPassword">Password</label>
          <input className={`${styles.textInput} ${styles.textArea}`} type="password" id="newPassword" name="newPassword" placeholder="Enter a new password" />
        </div>
      </span>

      <button type="submit" onClick={handleSignup}>Sign Up</button>
    </form>
  )
};