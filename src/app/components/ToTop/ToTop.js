"use client";
import React, { useState, useEffect } from "react";
import styles from "./totop.module.css";
import Image from "next/image";
const ToTop = () => {
  const [progress, setProgress] = useState(100);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const totalDocScrollLength = docHeight - windowHeight;
      const scrolled =100- (scrollTop / totalDocScrollLength) * 100;

      setProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);
  return (
    <>
      <div className={styles.container} onClick={scrollToTop}>
        <div>
          <Image src='/icons/up.png' alt="Top" height={20} width={20}/>
          {/* <img src="/icons/up.png" alt="" /> */}
          <svg
            width="49"
            height="49"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className={styles.progressBar}
              cx="24.5"
              cy="24.5"
              r="14"
              // stroke-dasharray="100"
              // stroke-dashoffset={progress}
              style={{strokeDasharray:100, strokeDashoffset: progress}}
            />
            <circle cx="24.5" cy="24.5" r="14" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ToTop;
