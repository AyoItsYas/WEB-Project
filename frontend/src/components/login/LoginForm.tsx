import React from "react";
import styles from "./Common.module.scss";

export default function LoginForm() {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    
    try {                           //idk the pathing
      const response = await fetch('/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const responseData = await response.json();
        const sessionToken = responseData.data.sessionToken;

                                                        //idk the pathing
        document.cookie = `sessionToken=${sessionToken}; path=/login.php`;

                      //idk the pathing
        router.push('/Product');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

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
            type="password"
            id="password"
            name="password"
          />
        </div>
      </span>

      <button type="submit" onClick={handleLogin}>Login</button>
    </form>
  );
}
