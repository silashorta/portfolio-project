import React, { useEffect, useRef, useState } from 'react'
import styles from './Projects.module.css'
import SwiperProjects from './SwiperProjects/SwiperProjects'
import { useInView } from 'react-intersection-observer';

function Projects() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-50px 0px',
  });

  const animatedRef = useRef();
  const typingRef = useRef()

  useEffect(() => {
    if (inView) {
      startTypingEffect();
    }

  }, [inView]);

  const [text, setText] = useState('');
  const fullText = "Meus projetos";

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
    <div id='projects' className={styles.projects__container} ref={ref}>
      <div className={styles.projects__descricao} >
        <h3 ref={typingRef} data-aos="fade-up">{text}</h3>
        <p data-aos="fade-up">Aqui estão alguns exemplos dos projetos que desenvolvi. Cada projeto representa uma oportunidade única e impactante.</p>
      </div>
        <SwiperProjects />
    </div>
  )
}

export default Projects
