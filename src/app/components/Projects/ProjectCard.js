import React from 'react'
import styles from './ProjectCard.module.css'
import Image from 'next/image';
const ProjectCard = ({title, url, imgUrl}) => {
  return (
    <div className={styles.card}>
      <Image  src={imgUrl} alt={title}
        width={500}
        height={200}
      
      />
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <button className={styles.cardBtn}>
          <a href={url} target='_blank'>Visit Website</a>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard