import React, { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'
import Carrousel from '../Swiper/Swiper'
import { useInView } from 'react-intersection-observer';
import "animate.css"

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

  const skillsData = [
    { icon: 'html-5.png', width: '90%', text: '90%' },
    { icon: 'css-3.png', width: '80%', text: '80%' },
    { icon: 'bootstrap.png', width: '80%', text: '90%' },
    { icon: 'js.png', width: '80%', text: '80%' },
    { icon: 'biblioteca.png', width: '70%', text: '70%' },
    { icon: 'node-js.png', width: '60%', text: '60%' },
    { icon: 'mysql.png', width: '60%', text: '60%' },
    { icon: 'git.png', width: '80%', text: '90%' },
    { icon: 'express.svg', width: '60%', text: '70%' },
    { icon: 'sequelize.png', width: '80%', text: '80%' },
    { icon: 'npm.svg', width: '90%', text: '90%' },
  ];

  return (
    <div id='skills' className={styles.skills__container} ref={ref}>
      <h3 ref={typingRef} className={styles.skills__titulo} data-aos="fade-up">{text}</h3>
      <div className={styles.skills__carrousel}>
        <Carrousel />
      </div>
      <div className={styles.skills__cards} data-aos="fade-in">
        {skillsData.map((skill, index) => (
          <div className={styles.skills__card} data-aos="fade-up" key={index}>
            <img src={`../assets/images/skills/${skill.icon}`} alt="" className={styles.skills__card_img} />
            <div className={styles.skills__bar} style={{ width: `${skill.width}`}}></div>
            <p>{skill.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
