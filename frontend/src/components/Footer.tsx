import Link from "next/link";

import styles from "./Footer.module.scss";
import React from "react";

function FooterModule() {
  return (
    <footer className={styles.Footer}>
      <div>
        <a href="">About Us</a>
        <p>WE are kpop stans</p>
        <p>FAQ</p>
      </div>

      <div>
        <Link href="/contact">Contact Us</Link>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
    </footer>
  );
}

export default FooterModule;
