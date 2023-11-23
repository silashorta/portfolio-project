import React from 'react'
import styles from './Contact.module.css'
import { Field, Form, Formik } from 'formik';

function Contact() {

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('http://127.0.0.1:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      try {
        const data = await response.json();
        console.log('JSON Data:', data);
      } catch (error) {
        console.error('Erro ao analisar JSON:', error);
        // Você pode tentar realizar outras operações no corpo, como response.text(), aqui se necessário.
      }
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
    }
  };

  return (
    <div id="contact" className={styles.contact__container}>
      <div>
        <div className={styles.contact__descricao}>
          <img src="../../assets/images/eu4.jpg" alt="" className={styles.contact__img} data-aos="fade" />
          <div className={styles.contact__redes}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
            <div>
              <a href="https://www.instagram.com/silashorta/" rel='noreferrer' target='_blank'><img src="../../assets/images/icon/instagram.png" alt="" className={styles.contact__icon} /></a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/silashorta/" rel='noreferrer' target='_blank'><img src="../../assets/images/icon/linkedin.png" alt="" className={styles.contact__icon} /></a>
            </div>
            <div>
              <a href="https://github.com/silashorta" rel='noreferrer' target='_blank'><img src="../../assets/images/icon/github.png" alt="" className={styles.contact__icon} /></a>
            </div>
            <div>
              <a href="mailto:silashorta.dev@gmail.com?subject=Portfolio Message&body=Olá! Visitei o seu portfolio e queria falar com você."><img src="../../assets/images/icon/o-email.png" alt="" className={styles.contact__icon} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact__form_container}>
        <h3 data-aos="fade">Contato</h3>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          onSubmit={handleSubmit}
          className={styles.contact__formik}
        >
          <Form className={styles.contact__form}>
            <div className={styles.contact__form_item}>
              <label htmlFor="name">Nome</label>
              <Field id="name" name="name" placeholder="Nome completo" className={styles.contact__field} data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" />
            </div>
            <div className={styles.contact__form_item}>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" placeholder="email@example.com" className={styles.contact__field} data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" />
            </div>
            <div className={styles.contact__form_item}>
              <label htmlFor="message">Mensagem</label>
              <Field as="textarea" rows="10" id="message" name="message" placeholder="Escreva sua mensagem" className={styles.contact__field} data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" />
            </div>
            <button type="submit" className={styles.contact__submit} data-aos="fade-up">Enviar</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Contact
