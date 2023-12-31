import React from 'react'
import styles from './Hero.module.css'
import 'animate.css';

function Hero() {
  return (
    <div className={styles.hero__container}>
      <div className={styles.hero__text}>
        <h1 className={styles.titulo}>Hello, world!</h1>
        <h2 className={styles.subtitulo} data-aos="fade">Eu sou o Silas Horta <div className={`animate__animated animate__pulse ${styles.text_main}`} >Web Developer</div> &lt;/&gt;</h2>
      </div>
      <div >
        <img src="../../assets/images/eu2.png" alt="" className={"animate__animated animate__backInUp " + styles.hero__img}/>
      </div>
    </div>
  )
}

export default Hero
