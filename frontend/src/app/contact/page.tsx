import React from "react";
import style from "./layout.module.scss";

export default function Page() {
  return (
    <div className={style.contactUsPage}>
      <div className={style.contactDetails}>
        <h1>Contact Us</h1>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Main Street, Cityville</p>
      </div>

      <span className={style.contactForm}>
        <h1>Contact Form</h1>
        <form>
          <div className={style.inputRow}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>

          <div className={style.inputRow}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className={style.inputRow}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </span>
    </div>
  );
}
