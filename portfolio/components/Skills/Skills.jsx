import React from 'react'
import styles from './Skills.module.css'
import Carrousel from '../Swiper/Swiper'


function Skills() {
  return (
    <div className={styles.skills__container}>
      <h3 className={styles.skills__titulo}>Skills</h3>
      <div className={styles.skills__carrousel}>
        <Carrousel />
      </div>
    </div>
  )
}

export default Skills
