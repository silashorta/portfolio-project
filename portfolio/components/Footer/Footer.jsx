import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer__container}>
      <div>
        <div className={styles.footer__links}>
          <div>Sobre</div>
          <div>Skills</div>
          <div>Projetos</div>
          <div>Contato</div>
        </div>
        <div className={styles.footer__redes}>
          <div>
            <a href="https://www.instagram.com/silashorta/" rel='noreferrer' target='_blank'><img src="../../public/assets/images/icon/instagram.png" alt="" className={styles.footer__icon} /></a>
          </div>
          <div>
          <a href="https://www.linkedin.com/in/silashorta/" rel='noreferrer' target='_blank'><img src="../../public/assets/images/icon/linkedin.png" alt="" className={styles.footer__icon} /></a>
          </div>
          <div>
          <a href="https://github.com/silashorta" rel='noreferrer' target='_blank'><img src="../../public/assets/images/icon/github.png" alt="" className={styles.footer__icon} /></a>
          </div>
          <div>
          <a href=""><img src="../../public/assets/images/icon/o-email.png" alt="" className={styles.footer__icon} /></a>
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
