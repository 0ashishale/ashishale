import React from 'react';
import styles from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Hi, It's me Ashish Ale Magar</h1>

        <p>
          MERN Stack Developer & UI/UX Designer
        </p>

        <a href='#me'>
          <button>About me</button>
        </a>
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
