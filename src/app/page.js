import Hero from "./components/Hero/Hero";
import Me from "./components/Me/Me";
import Projects from "./components/Projects/Projects";
import Colabration from "./components/Colabration/Colabration";
import { Contact } from "./components/Contact/Contact";
import styles from "./page.module.css";
import ToTop from "./components/ToTop/ToTop";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* header */}
      <header className={styles.header}>
        <a href="#">
          <Image src="/logo.png" alt="2AM" width={70} height={30} />
        </a>
        {/* <Image src='/2AM.png' height={20} width={40}/> */}
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
        <div className={styles.wrapper}>
          <a href="#">
            <Image src="/logo.png" alt="2AM" width={70} height={30} />
          </a>
        </div>
        <p> &copy; 2024 Ashish Ale Magar. All rights reserved.</p>
      </section>
    </main>
  );
}
