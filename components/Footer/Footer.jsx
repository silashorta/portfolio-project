import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer__container}>
      <div>
        <div className={styles.footer__links}>
          <a href="#about">
            <div className={styles.footer__link}>Sobre</div>
          </a>
          <a href="#skills">
            <div className={styles.footer__link}>Skills</div>
          </a>
          <a href="#projects">
            <div className={styles.footer__link}>Projetos</div>
          </a>
          <a href="#contact">
            <div className={styles.footer__link}>Contatos</div>
          </a>
        </div>
        <div className={styles.footer__redes}>
          <div>
            <a href="https://www.instagram.com/silashorta/" rel='noreferrer' target='_blank'><img src="../../assets/images/icon/instagram.png" alt="" className={styles.footer__icon} /></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/silashorta/" rel='noreferrer' target='_blank'><img src="../../assets/images/icon/linkedin.png" alt="" className={styles.footer__icon} /></a>
          </div>
          <div>
            <a href="https://github.com/silashorta" rel='noreferrer' target='_blank'><img src="../../assets/images/icon/github.png" alt="" className={styles.footer__icon} /></a>
          </div>
          <div>
            <a href="mailto:silashorta.dev@gmail.com?subject=Portfolio Message&body=Olá! Visitei o seu portfolio e queria falar com você."><img src="../../assets/images/icon/o-email.png" alt="" className={styles.footer__icon} /></a>
          </div>
          <div>
            <a href="https://wa.me/+5521968840132?text=Olá!%20Visitei%20seu%20portfólio%20e%20gostaria%20de%20conversar%20com%20você." rel='noreferrer' target='_blank'><img src="../../assets/images/icon/whatsapp.png" alt="" className={styles.footer__icon} /></a>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.footer__copy}>
        <small className={styles.footer__copy_text}>Desenvolvido por Silas Horta&copy; </small>
      </div>
    </div>
  )
}

export default Footer
