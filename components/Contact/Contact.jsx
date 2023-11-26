import { useEffect, useRef, useState } from 'react'
import styles from './Contact.module.css'
import { Field, Form, Formik } from 'formik';
import { useInView } from 'react-intersection-observer';

function Contact() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch('https://api-portfolio-two.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      try {
        const data = await response.json();

        if (data.success) {
          resetForm();
          setFormData({ name: '', email: '', message: '' });
          setShowSuccessMessage(true);
        }

        resetForm();

      } catch (error) {
        console.error('Erro ao analisar JSON:', error);
      }
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
    }
  };


  const closeMessageSucess = () => {
    setShowSuccessMessage(false)
  }


  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-50px 0px',
  });

  const typingRef = useRef()

  useEffect(() => {
    setShowSuccessMessage(false);
    if (inView) {
      startTypingEffect();
    }

  }, [inView]);

  const [text, setText] = useState('');
  const fullText = "Contatos";

  const startTypingEffect = () => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setText(fullText.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > fullText.length) {
        clearInterval(intervalId);
      }
    }, 150);
  };

  return (
    <div id="contact" className={styles.contact__container} ref={ref}>
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
            <div>
              <a href="https://wa.me/+5521968840132?text=Olá!%20Visitei%20seu%20portfólio%20e%20gostaria%20de%20conversar%20com%20você." rel='noreferrer' target='_blank'><img src="../../assets/images/icon/whatsapp.png" alt="" className={styles.contact__icon} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact__form_container}>
        <h3 ref={typingRef} data-aos="fade">{text}</h3>
        <Formik
          initialValues={formData}
          onSubmit={handleSubmit}
          className={styles.contact__formik}
        >
          <Form className={styles.contact__form}>
            <div className={styles.contact__form_item} data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <label htmlFor="name">Nome</label>
              <Field id="name" name="name" placeholder="Nome completo" className={styles.contact__field} />
            </div>
            <div className={styles.contact__form_item} data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" placeholder="email@example.com" className={styles.contact__field} />
            </div>
            <div className={styles.contact__form_item} data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
              <label htmlFor="message">Mensagem</label>
              <Field as="textarea" rows="10" id="message" name="message" placeholder="Escreva sua mensagem" className={styles.contact__field} />
            </div>
            <button type="submit" className={styles.contact__submit} data-aos="fade-up">Enviar</button>
            {showSuccessMessage && (
              <div className={"animate__animated animate__bounce " + styles.successMessage}>
                <p>Mensagem enviada com sucesso!</p>
                <img src='../../assets/images/icon/close.png' className={styles.contact__icon_close} onClick={closeMessageSucess} />
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Contact
