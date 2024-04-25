import React from "react";
import styles from './me.module.css'
import Image from "next/image";
const Me = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <section className={styles.introduction} id="me">
        <div>
          <div className={styles.me}>
            <h1>&quot;Me&quot;</h1>
            <p>
              I am a passionate MERN stack developer with over a year of
              experience creating dynamic and responsive web and mobile
              applications. Specializing in MongoDB, Express.js, React.js, React
              Native and Node.js, I bring a full-stack approach to building
              software that is both user-friendly and secure.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.background}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <span>
              <Image
                src="/icons/design.png"
                alt="Design"
                height={30}
                width={30}
              />
              {/* <img src="/icons/design.png" alt="" /> */}
            </span>
            <h1>Designer</h1>
            <div className={styles.content}>
              <p className={styles.thoughts}>
                I like clean design and thoughtful interactions, ensuring that
                every element serves a purpose and enhances the user experience.
              </p>
              <div>
                <h4>Things I enjoy designing:</h4>
                <p>UI/UX, Web, Apps</p>
              </div>
              <div></div>
              <div>
                <h4>Dev Tools:</h4>
                <p>Pen & Paper</p>
                <p>Figma</p>
                <p>Photoshop</p>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <span>
              <Image
                src="/icons/frontend.png"
                alt="frontend"
                height={30}
                width={30}
              />

              {/* <img src="/icons/frontend.png" alt="" /> */}
            </span>
            <h1>Frontend Developer</h1>
            <div className={styles.content}>
              <p className={styles.thoughts}>
                I’m passionate about the magic of turning designs into
                functional realities in the browser.{" "}
              </p>
              <div>
                <h4>Languages I speak:</h4>
                <p>HTML, CSS, Sass, Javascript, Git</p>
              </div>
              <div></div>
              <div>
                <h4>Dev Tools:</h4>
                <p>React.js </p>
                <p>React Native</p>
                <p>Next.js </p>
                <p>Tailwind CSS</p>
                <p>Bootstrap</p>
                <p>Vs Code</p>
                <p>Github</p>
                <p>Gitlab</p>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <span>
              <Image
                src="/icons/backend.png"
                alt="Backend"
                height={50}
                width={50}
              />

              {/* <img src="/icons/backend.png" alt="" /> */}
            </span>
            <h1>Backend Developer</h1>
            <div className={styles.content}>
              <p className={styles.thoughts}>
                I like to focus on clean, efficient code and thoughtful
                architecture to ensure optimal performance and reliability.
              </p>
              <div>
                <h4>Languages I speak:</h4>
                <p>Javascript, PHP</p>
              </div>
              <div></div>
              <div>
                <h4>Dev Tools:</h4>
                <p>Node.js</p>
                <p>Express.js</p>
                <p>MongoDB</p>
                <p>Postman</p>
                <p>VS Code</p>
                <p>Github</p>
                <p>Gitlab</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Me;
