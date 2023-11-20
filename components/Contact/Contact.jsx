import React from 'react'
import styles from './Contact.module.css'
import { Field, Form, Formik } from 'formik';

function Contact() {
  return (
    <div className={styles.contact__container}>
      <div>
        <div className={styles.contact__descricao}>
          <img src="../../public/assets/images/eu4.jpg" alt="" className={styles.contact__img} />
          <div className={styles.contact__redes}>
            <div>
              <a href="https://www.instagram.com/silashorta/" rel='noreferrer' target='_blank'><img src="../../public/assets/images/icon/instagram.png" alt="" className={styles.contact__icon} /></a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/silashorta/" rel='noreferrer' target='_blank'><img src="../../public/assets/images/icon/linkedin.png" alt="" className={styles.contact__icon} /></a>
            </div>
            <div>
            <a href="https://github.com/silashorta" rel='noreferrer' target='_blank'><img src="../../public/assets/images/icon/github.png" alt="" className={styles.contact__icon} /></a>
            </div>
            <div>
            <a href=""><img src="../../public/assets/images/icon/o-email.png" alt="" className={styles.contact__icon} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact__form_container}>
        <h3>Contato</h3>
        <Formik className={styles.contact__formik}>
          <Form className={styles.contact__form}>
            <div className={styles.contact__form_item}>
              <label htmlFor="name">Nome</label>
              <Field id="name" name="name" placeholder="Nome completo" className={styles.contact__field} />
            </div>
            <div className={styles.contact__form_item}>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" placeholder="email@example.com" className={styles.contact__field} />
            </div>
            <div className={styles.contact__form_item}>
              <label htmlFor="message">Mensagem</label>
              <Field as="textarea" rows="10" id="message" name="message" placeholder="Escreva sua mensagem" className={styles.contact__field} />
            </div>
            <button type="submit" className={styles.contact__submit}>Enviar</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Contact
