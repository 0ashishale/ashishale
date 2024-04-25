import React from 'react'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>MERN Stack Developer & UI/UX Designer</h1>
      <div className={styles.ocean}>
        <div className={styles.wave}></div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.nameSection}>
          <div>
            <h2>Hi, I am Ashish Ale Magar</h2>
            <h3>Nice to meet you.</h3>
          </div>

          <a href="#me">
            <button>About me</button>
          </a>
        </div>

        <img src="/images/hero.png" alt="heroImage" />
      </div>
    </section>
  );
}

export default Hero