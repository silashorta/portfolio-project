import React, { useEffect, useRef, useState } from 'react'
import styles from './HeaderCTA.module.css'
import { useInView } from 'react-intersection-observer';


function HeaderCTA() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '100%',
  });

  const typingRef = useRef()

  useEffect(() => {

    startTypingEffect();
    
  }, [inView]);

  const [text, setText] = useState('');
  const fullText = "Meu Mundo Digital!";

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
    <div className={styles.cta__container}>
      <div className={styles.cta__text}>
        <h3 ref={typingRef}>{text}</h3>
        <p>Você está pronto para mergulhar no universo da programação e design web? Explore meu portfolio e veja como posso transformar ideias em experiências digitais incríveis.</p>
      </div>
      <div className={styles.cta__buttons}>
        <a href="#projects"><button>Ver Projetos</button></a>
        <a href="#contact"><button>Contato</button></a>
      </div>
    </div>
  )
}

export default HeaderCTA
