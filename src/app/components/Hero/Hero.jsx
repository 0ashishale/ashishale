import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.available}>
          <span /> Looking for Job or Internship
        </p>
        <div>
          <h1>Hi, It&apos;s me Ashish Ale Magar</h1>
          <p className={styles.title}>Passionate Full-Stack Developer</p>
        </div>
        <p className={styles.heroText}>
          I turn ideas into great digital products. I focus on building
          easy-to-use interfaces and strong backend systems that work smoothly
          together.
        </p>

        <div className={styles.ctaSection}>
          <a
            className={styles.cvAnchor}
            href="AshishAle-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my CV
          </a>
          <a href="#me" className={styles.aboutAnchor}>
            About me &rarr;
          </a>
        </div>
      </div>

      <div className={styles.ocean}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>
    </section>
  );
};

export default Hero;
