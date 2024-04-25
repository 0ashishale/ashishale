import React from 'react'
import ProjectCard from './ProjectCard';
import styles from './project.module.css'

const Projects = () => {
  return (
    <section className={styles.myWorks}>
      <div className={styles.workHeading}>
        <h1>My Recent Works</h1>
        <p>Here are few projects I&apos;ve worked on.</p>
        <div className="links">
          <a
            href="https://github.com/0ashishale"
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </a>
          <a
            href="https://gitlab.com/ashishale"
            target="_blank"
            rel="noreferrer noopener"
          >
            Gitlab
          </a>
        </div>
      </div>
      <div className={styles.projects}>
        <ProjectCard
          title={`Neat Dental Care`}
          url={`https://www.neatdentalcare.com.np`}
          imgUrl={`/images/neatDental.jpg`}
        />
        <ProjectCard
          title={`SAATHisoft`}
          url={`https://saathisoft.vercel.app/`}
          imgUrl={`/images/saathisoft.jpg`}
        />
        <ProjectCard
          title={`Aiwa Education Consultancy`}
          url={`https://aiwa.edu.np/`}
          imgUrl={`/logos/aiwa.png`}
        />
        {/* <ProjectCard
          title={`E-Market`}
          url={`https://aiwa.edu.np/`}
          imgUrl={`/images/saathisoft.jpg`}
        /> */}
      </div>
    </section>
  );
}

export default Projects