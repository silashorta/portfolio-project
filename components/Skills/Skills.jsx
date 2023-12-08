import React, { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'
import Carrousel from '../Swiper/Swiper'
import { useInView } from 'react-intersection-observer';
import "animate.css"
import ProgressBar from "@ramonak/react-progress-bar";

function Skills() {

  const [ref, inView] = useInView({
    triggerOnce: true, // Garante que a animação seja acionada apenas uma vez
    rootMargin: '-100px 0px', // Ajuste conforme necessário para a área de visualização
  });

  const typingRef = useRef()
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
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
    { icon: 'html-5.png', width: 95, text: 'Avançado' },
    { icon: 'css-3.png', width: 85, text: 'Avançado' },
    { icon: 'bootstrap.png', width: 85, text: 'Avançado' },
    { icon: 'js.png', width: 80, text: 'Avançado' },
    { icon: 'biblioteca.png', width: 70, text: 'Intermediário' },
    { icon: 'node-js.png', width: 60, text: 'Básico' },
    { icon: 'mysql.png', width: 60, text: 'Básico' },
    { icon: 'git.png', width: 90, text: 'Avançado' },
    { icon: 'express.png', width: 60, text: 'Básico' },
    { icon: 'sequelize.png', width: 80, text: 'Avançado' },
    { icon: 'npm.svg', width: 90, text: 'Avançado' },
  ];

  return (
    <div id='skills' className={styles.skills__container} ref={ref}>
      <h3 ref={typingRef} className={styles.skills__titulo} data-aos="fade-up">{text}</h3>
      <div className={styles.skills__carrousel}>
        <Carrousel />
      </div>
      <div className={styles.skills__cards} data-aos="fade">
        {skillsData.map((skill, index) => (
          <div className={styles.skills__card} data-aos={``} key={index}>
            <img src={`../assets/images/skills/${skill.icon}`} alt="" className={styles.skills__card_img} /> <span className={styles.skills__bar_text}> {`${skill.text}`} </span>
            <div className={styles.skills__bar}>
              <ProgressBar completed={skill.width} bgColor="#3e9cff" height="16px" animateOnRender={true} initCompletedOnAnimation="0" isLabelVisible={false}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
