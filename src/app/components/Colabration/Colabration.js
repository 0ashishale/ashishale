import React from 'react'
import styles from './colabration.module.css'
import Image from 'next/image';
const Colabration = () => {
  return (
    <section className={styles.honored}>
      <div className={styles.honoredHeading}>
        <h1>Happy to meet with.</h1>
        <p>I feel honored to have worked with these companies.</p>
      </div>

      <div className={styles.companies}>
    
        <a
          href="https://www.neatdentalcare.com.np"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/logos/neat.png"
            alt="Neat Dental Care"
            height={200}
            width={220}
          />
        </a>
        <a
          href="https://www.aiwa.edu.np"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/logos/aiwa.png"
            alt="Aiwa Education Consultancy"
            height={200}
            width={220}
          />
        </a>
        <a
          href="https://www.websoftnepal.com.np"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/logos/websoft.png"
            alt="Websoft Nepal"
            height={200}
            width={220}
          />
        </a>

        <a
          href="https://saathisoft.vercel.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/logos/saathisoft.png"
            alt="SAATHisoft"
            height={100}
            width={100}
          />
        </a>
      </div>
    </section>
  );
}

export default Colabration