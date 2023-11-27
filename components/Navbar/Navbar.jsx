import React, { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={styles.menu__container}>
        <div><img src="../../assets/images/icon/codigo-html.png" alt="" className={styles.menu__logo} /></div>
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

        {/* Adicionando o ícone do menu hamburguer */}
        <div className={styles.menu__hamburger} onClick={toggleMenu}>
          <img src="../assets/images/icon/menu.png" alt="" />
        </div>
      </nav>

      {/* Adicionando o menu responsivo */}
      {isMenuOpen && (
        <div className={styles.responsive__menu}>
          <a href="#about" onClick={toggleMenu}>
            Sobre
          </a>
          <a href="#skills" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projetos
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contatos
          </a>
          <div className={styles.main__responsive}></div>         
        </div>
      )}

      <div className={styles.main}></div>
    </div>
  );
}

export default Navbar;
