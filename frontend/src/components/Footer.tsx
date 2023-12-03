import styles from './Footer.module.scss';
import React from 'react';

function FooterModule(){
    return (
        <footer className={styles.Footer}>
          <div>
            <h4>About Us</h4>
            <p>We are Kpop Stans</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div>
            <h1>Sue us here</h1>
          </div>
        </footer>
    )
}

export default FooterModule;