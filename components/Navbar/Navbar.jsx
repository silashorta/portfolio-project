import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div>
      <nav className={styles.menu__container}>
        <div className={styles.menu__logo}>&lt;/&gt;</div>
        <div className={styles.menu__links}>
          <div className={styles.menu__link}>Sobre</div>
          <div className={styles.menu__link}>Skills</div>
          <div className={styles.menu__link}>Projetos</div>
          <div className={styles.menu__link}>Contatos</div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
