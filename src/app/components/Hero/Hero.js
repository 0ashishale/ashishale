import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image';

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
        {/* <Image src='/images/hero.png' alt='2AM' height={300} width={400}/> */}
      </div>

      <div className={styles.ocean}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>
    </section>
  );
}

export default Hero