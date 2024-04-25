import React from 'react'
import styles from './ProjectCard.module.css'
const ProjectCard = ({title, url, imgUrl}) => {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt={title} />
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