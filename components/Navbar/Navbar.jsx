import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div>
      <nav className={styles.menu__container}>
        <div className={styles.menu__logo}>&lt;/&gt;</div>
        <div className={styles.menu__links}>
          <a href="#about">
            <div className={styles.menu__link}>Sobre</div>
          </a>
          <a href="#skills">
            <div className={styles.menu__link}>Skills</div>
          </a>
          <a href="#projects">
            <div className={styles.menu__link}>Projetos</div>
          </a>
          <a href="#contact">
            <div className={styles.menu__link}>Contatos</div>
          </a>
        </div>
      </nav>
      <div className={styles.main}>
      </div>
    </div>
  )
}

export default Navbar
