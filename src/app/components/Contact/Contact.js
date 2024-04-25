import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image';
export const Contact = () => {
  return (
    <section id="contact" className={styles.connectWithMe}>
      <div>
        <h1>Connect With Me</h1>
        <p>Let&apos;s make it together. </p>
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
            <Image
              src="/logos/linkedIn.png"
              alt="LinkedIn"
              height={50}
              width={50}
            />
          </a>
          <a
            href="https://www.instagram.com/ale_magar_ashish/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logos/instagram.png"
              alt="Instagram"
              height={50}
              width={50}
            />

            {/* <img src="/logos/instagram.png" alt="instagram" /> */}
          </a>
          <a
            href="https://wa.me/9779815138271"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/logos/whatapps.png"
              alt="Whatapp"
              height={50}
              width={48}
            />

            {/* <img src="/logos/whatapps.png" alt="whatapps" /> */}
          </a>
        </div>
      </div>
    </section>
  );
}
