import React from 'react'
import styles from './Skills.module.css'
import Carrousel from '../Swiper/Swiper'


function Skills() {
  return (
    <div id='skills' className={styles.skills__container}>
      <h3 className={styles.skills__titulo} data-aos="fade">Skills</h3>
      <div className={styles.skills__carrousel}>
        <Carrousel />
      </div>
      <div className={styles.skills__cards} data-aos="fade-left">
        <div className={styles.skills__card}>
          <img src="../assets/images/skills/html-5.png" alt="" className={styles.skills__card_img}/>
        </div>
        <div className={styles.skills__card}>
          <img src="../assets/images/skills/css-3.png" alt="" className={styles.skills__card_img}/>
        </div>
        <div className={styles.skills__card}>
          <img src="../assets/images/skills/bootstrap.png" alt="" className={styles.skills__card_img}/>
        </div>
        <div className={styles.skills__card}>
          <img src="../assets/images/skills/js.png" alt="" className={styles.skills__card_img}/>
        </div>
        <div className={styles.skills__card}>
          <img src="../assets/images/skills/biblioteca.png" alt="" className={styles.skills__card_img}/>
        </div>
        <div className={styles.skills__card}>
          <img src="../assets/images/skills/node-js.png" alt="" className={styles.skills__card_img}/>
        </div>
        <div className={styles.skills__card}>
          <img src="../assets/images/skills/mysql.png" alt="" className={styles.skills__card_img}/>
        </div>
        <div className={styles.skills__card}>
          <img src="../assets/images/skills/git.png" alt="" className={styles.skills__card_img}/>
        </div>
      </div>
    </div>
  )
}

export default Skills
