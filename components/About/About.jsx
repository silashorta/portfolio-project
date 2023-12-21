import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';
import 'animate.css'
import { useInView } from 'react-intersection-observer';
import DownloadButton from './DownloadButton/DownloadButton';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-50px 0px',
  });

  const animatedRef = useRef();
  const typingRef = useRef()

  useEffect(() => {
    if (inView) {
      animatedRef.current.classList.add('animate__animated', 'animate__bounceInLeft', 'animate__delay-1s');
      startTypingEffect();
    }

  }, [inView]);

  const [text, setText] = useState('');
  const fullText = "Sobre mim...";

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
    <div id="about" className={styles.about__container} ref={ref}>
      <div>
        <h3 ref={typingRef} className={styles.about__titulo} data-aos="fade-up">{text}</h3>
        <div className={styles.about__descricao_container} data-aos="fade-up">
          <div ref={animatedRef} className={"animate__animated animate__bounceInLeft " + styles.about__descricao}>
            <p>Olá, sou Silas Horta, um desenvolvedor web apaixonado por transformar ideias em
              experiências digitais. Desde minha primeira linha de código, minha jornada começou com
              uma simples curiosidade em desvendar o mundo por trás dos sites que visitava.</p>
            <p>O que mais me fascina é a capacidade de
              transformar conceitos em realidade digital, tornando linhas de código em experiências
              significativas.</p>
            <p>Vamos transformar suas ideias em
              realidade digital e criar soluções que realmente se destaquem na web!</p>
          </div>
    {/*       <div ref={animatedRef} className={styles.about__svg}>
            <img src="../../assets/images/eu4.png" alt="" className={styles.about__img}/>
          </div> */}
        </div>
        <DownloadButton />
      </div>
    </div>
  )
}

export default About
