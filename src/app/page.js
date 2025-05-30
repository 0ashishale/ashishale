import Hero from "./components/Hero/Hero";
import Me from "./components/Me/Me";
import Projects from "./components/Projects/Projects";
import Colabration from "./components/Colabration/Colabration";
import { Contact } from "./components/Contact/Contact";
import styles from "./page.module.css";
import ToTop from "./components/ToTop/ToTop";
import Image from "next/image";
import Logo from "./components/ui/Logo";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* header */}
      <header className={styles.header}>
        <Logo />

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
      <ToTop />
      {/* footer */}
      <section className={styles.footer}>
        {/* <Contact /> */}
        <div className={styles.wrapper}>
          <Logo />
          <p> &copy; 2024 Ashish Ale Magar. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
}
