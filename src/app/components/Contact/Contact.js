import React from 'react'
import styles from './contact.module.css'
export const Contact = () => {
  return (
    <section id="contact" className={styles.connectWithMe}>
      <div>
        <h1>Connect With Me</h1>
        <p>Let's make it together. </p>
      </div>
      <div>
        <div className="links">
          <a href="mailto: ashishale42@gmail.com" target="_blank">
            Email me
          </a>
        </div>
        <p>---- or ----</p>
        <p>Connect via</p>
        <div>
          <a
            href="https://www.linkedin.com/in/ashish-ale-289870263/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/logos/linkedIn.png" alt="linkedin" />
          </a>
          <a
            href="https://www.instagram.com/ale_magar_ashish/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/logos/instagram.png" alt="instagram" />
          </a>
          <a href="https://wa.me/9779815138271" target="_blank" rel="noreferrer noopener">
            <img src="/logos/whatapps.png" alt="whatapps" />
          </a>
          {/* <img src="/images/facebook.png" alt="" /> */}
        </div>
      </div>
    </section>
  );
}
