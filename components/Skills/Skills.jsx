import React, { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'
import Carrousel from '../Swiper/Swiper'
import { useInView } from 'react-intersection-observer';


function Skills() {

  const [ref, inView] = useInView({
    triggerOnce: false, // Garante que a animação seja acionada apenas uma vez
    rootMargin: '-100px 0px', // Ajuste conforme necessário para a área de visualização
  });

  const typingRef = useRef()

  useEffect(() => {
    if (inView) {
      startTypingEffect();
    }

  }, [inView]);

  const [text, setText] = useState('');
  const fullText = "Minhas habilidades";

  const startTypingEffect = () => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setText(fullText.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > fullText.length) {
        clearInterval(intervalId);
      }
    }, 150); // Ajuste conforme necessário para a velocidade da digitação
  };

  return (
    <div id='skills' className={styles.skills__container} ref={ref}>
      <h3 ref={typingRef} className={styles.skills__titulo} data-aos="fade-up">{text}</h3>
      <div className={styles.skills__carrousel}>
        <Carrousel />
      </div>
      <div className={styles.skills__cards} data-aos="fade-in">
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