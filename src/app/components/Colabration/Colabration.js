import React from 'react'
import styles from './colabration.module.css'
const Colabration = () => {
  return (
    <section className={styles.honored}>
      <div className={styles.honoredHeading}>
        <h1>Happy to meet with.</h1>
        <p>I feel honored to have worked with these companies.</p>
      </div>

      <div className={styles.companies}>
        <img src="/logos/neat.png" alt="Neat Dental Care" />
        <img src="/logos/saathisoft.png" alt="SAATHisoft" />
        <img src="/logos/aiwa.png" alt="Aiwa Education Consultancy" />
        <img src="/logos/websoft.png" alt="Web Soft Nepal" />
      </div>
    </section>
  );
}

export default Colabration