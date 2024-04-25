import Hero from "./components/Hero/Hero";
import Me from "./components/Me/Me";
import Projects from "./components/Projects/Projects";
import Colabration from "./components/Colabration/Colabration";
import { Contact } from "./components/Contact/Contact";
import styles from "./page.module.css";
import ToTop from "./components/ToTop/ToTop";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* header */}
      <header className={styles.header}>
        <span>2AM</span>
        <a href="#contact">
          <button className={styles.sayHello}>
            Say Hello <span className={styles.blink}>_</span>
          </button>
        </a>
      </header>
      {/* main content */}
      <Hero />
      <Me />
      <Projects />
      <Colabration />
      <Contact />
      <ToTop/>
      {/* footer */}
      <section className={styles.footer}>
        <div className={styles.wrapper}>
          <h1>2AM</h1>
        </div>
        <p> &copy; 2024 Ashish Ale Magar. All rights reserved.</p>
      </section>
    </main>
  );
}
