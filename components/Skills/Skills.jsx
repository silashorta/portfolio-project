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
        <div className={styles.skills__card}>
          <svg className={styles.carrousel__img} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M40.53 77.82V50.74H42V55a5.57 5.57 0 00.48-.6 7.28 7.28 0 016.64-4.12c3.35-.1 6.07 1.14 7.67 4.12a13.24 13.24 0 01.32 12.14c-1.49 3.34-5.17 5-9.11 4.39a7.37 7.37 0 01-5.88-3.88v10.77zM42 60.32c.13 1.32.18 2.26.33 3.18.58 3.62 2.72 5.77 6.08 6.16A6.91 6.91 0 0056 65.27a11.77 11.77 0 00-.26-9.68 6.77 6.77 0 00-7.13-3.94 6.59 6.59 0 00-5.89 4.87 33.4 33.4 0 00-.72 3.8zM88.41 64a7.92 7.92 0 01-7.74 7c-6.16.31-9.05-3.78-9.51-8.5a13.62 13.62 0 011.2-7.5 8.37 8.37 0 018.71-4.67 8 8 0 017.1 6.09 41.09 41.09 0 01.69 4.5H72.67c-.3 4.28 2 7.72 5.26 8.55 4.06 1 7.53-.76 8.79-4.62.28-.99.79-1.13 1.69-.85zm-15.74-4.45h14.47c-.09-4.56-2.93-7.86-6.78-7.91-4.36-.07-7.5 3.11-7.69 7.91zM91.39 64.1h1.42a5.69 5.69 0 003.34 4.9 8.73 8.73 0 007.58-.2 3.41 3.41 0 002-3.35 3.09 3.09 0 00-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25 35.25 0 0194 59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21 10.21 0 019.76-.15 5.14 5.14 0 012.6 5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17 9.17 0 00-3 .91 3 3 0 00-1.74 3 3 3 0 002 2.82c1.54.56 3.15.92 4.73 1.36 1.27.35 2.59.58 3.82 1a4.51 4.51 0 013.1 4.07 4.81 4.81 0 01-2.59 5c-3.34 1.89-8.84 1.39-11.29-1a6.67 6.67 0 01-1.94-4.75zM125.21 56.61h-1.33c0-.18-.07-.34-.09-.49a4.35 4.35 0 00-3.54-4.18 8.73 8.73 0 00-5.61.27 3.41 3.41 0 00-2.47 3.25 3.14 3.14 0 002.4 3.16c2 .62 4.05 1 6.08 1.56a17 17 0 011.94.59 5 5 0 01.27 9.31 11.13 11.13 0 01-9 .09 6.24 6.24 0 01-3.76-6.06h1.3a7.29 7.29 0 0011.1 4.64 3.57 3.57 0 001.92-3.34 3.09 3.09 0 00-2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43 35.43 0 01-4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07 10.07 0 019.92-.11 5.23 5.23 0 012.51 5.13zM38.1 70.51a2.29 2.29 0 01-2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06 2.76-4.12 5.41-6 8.16a2.2 2.2 0 01-2.7 1.06l7.73-10.37-7.19-9.37a2.39 2.39 0 012.85 1c1.67 2.44 3.52 4.77 5.36 7.24 1.85-2.45 3.68-4.79 5.39-7.21a2.15 2.15 0 012.68-1l-2.79 3.7c-1.25 1.65-2.48 3.31-3.78 4.92a1 1 0 000 1.49c2.39 3.17 4.76 6.35 7.2 9.61zM70.92 50.66v1.4a7.25 7.25 0 00-7.72 7.49v11h-1.43V50.74h1.4v4.06c1.73-2.96 4.4-4.06 7.75-4.14zM2.13 60c.21-1 .34-2.09.63-3.11 1.73-6.15 8.78-8.71 13.63-4.9 2.84 2.23 3.55 5.39 3.41 8.95h-16c-.26 6.36 4.33 10.2 10.2 8.24a6.09 6.09 0 003.87-4.31c.31-1 .81-1.17 1.76-.88a8.12 8.12 0 01-3.88 5.93 9.4 9.4 0 01-10.95-1.4 9.85 9.85 0 01-2.46-5.78c0-.34-.13-.68-.2-1q-.01-.89-.01-1.74zm1.69-.43h14.47c-.09-4.61-3-7.88-6.88-7.91-4.32-.06-7.41 3.14-7.6 7.89z"/></svg>
        </div>
        <div className={styles.skills__card}>
          <svg className={styles.carrousel__img} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#2f406a" d="M32.51 56.94V71l-11.94 7-.11.1v5.3l.11.1 16.81-9.71V54.21h-.16l-4.74 2.65v.11"/><path fill="#2379bd" d="M8.59 71.1l12 6.95v5.45L3.64 73.75v-19.5h.17L8.54 57l.05.16v14"/><path fill="#03afef" d="M8.59 57.13l-5-2.88 16.94-9.75 16.85 9.71-4.87 2.73-12-6.83-11.94 7"/><path fill="#2f406a" d="M20.36 69.49l-.13-.13v-5.27l.13-.07v-.13l4.52-2.64h.14v5.44l-4.69 2.78"/><path fill="#2379bd" d="M15.59 66.89v-5.65h.13l4.6 2.68v5.58l-4.77-2.61"/><path fill="#03afef" d="M20.28 58.47l-4.69 2.78L20.36 64l4.69-2.74-4.77-2.82"/><path fill="#2f406a" d="M14.52 72.94l-.13-.13v-5.28l.13-.07v-.13l4.52-2.64h.14v5.44l-4.69 2.78"/><path fill="#2379bd" d="M9.75 70.33v-5.65h.13l4.6 2.68v5.58l-4.73-2.61"/><path fill="#03afef" d="M14.45 61.91l-4.7 2.77 4.77 2.78 4.69-2.74-4.77-2.82"/><path fill="#2f406a" d="M26.62 73.07l-.13-.13v-5.28l.13-.07v-.13l4.52-2.64h.14v5.44l-4.69 2.78"/><path fill="#2379bd" d="M21.85 70.46v-5.65H22l4.6 2.68v5.58l-4.77-2.61"/><path fill="#03afef" d="M26.54 62l-4.69 2.78 4.77 2.78 4.69-2.74L26.54 62"/><path fill="#2f406a" d="M20.78 76.51l-.13-.13V71.1l.13-.07v-.13l4.52-2.64h.14v5.44l-4.69 2.78"/><path fill="#2379bd" d="M16 73.9v-5.64h.13l4.6 2.68v5.58L16 73.9"/><path fill="#03afef" d="M20.7 65.48L16 68.26 20.78 71l4.69-2.74-4.77-2.78"/><path fill="#2f406a" d="M20.36 62l-.13-.13v-5.26l.13-.07v-.13l4.52-2.64h.14v5.44L20.36 62"/><path fill="#2379bd" d="M15.59 59.41v-5.65h.13l4.6 2.68V62l-4.77-2.61"/><path fill="#03afef" d="M20.28 51l-4.69 2.78 4.77 2.78 4.69-2.74L20.28 51"/><path fill="#2f406a" d="M14.52 65.45l-.13-.13V60l.13-.07v-.13l4.52-2.64h.14v5.44l-4.69 2.78"/><path fill="#2379bd" d="M9.75 62.85V57.2h.13l4.6 2.68v5.58l-4.73-2.61"/><path fill="#03afef" d="M14.45 54.43l-4.7 2.77 4.77 2.8 4.69-2.74-4.77-2.82"/><path fill="#2f406a" d="M26.62 65.58l-.13-.13v-5.27l.13-.07v-.13l4.52-2.64h.14v5.44l-4.69 2.78"/><path fill="#2379bd" d="M21.85 63v-5.67H22L26.58 60v5.58L21.85 63"/><path fill="#03afef" d="M26.54 54.56l-4.69 2.78 4.77 2.78 4.69-2.74-4.77-2.82"/><path fill="#2f406a" d="M20.78 69l-.13-.13v-5.25l.13-.07v-.13l4.52-2.64h.14v5.44L20.78 69"/><path fill="#2379bd" d="M16 66.42v-5.65h.13l4.6 2.68V69L16 66.42"/><path fill="#03afef" d="M20.7 58L16 60.77l4.77 2.78 4.69-2.74L20.7 58"/><path fill="#2f406a" d="M45.82 56.56q-3.15 0-3.15 2.37a2 2 0 00.72 1.82 9.66 9.66 0 002.94 1A7.47 7.47 0 0149.47 63a3.24 3.24 0 01.92 2.59q0 4.47-4.64 4.47a26 26 0 01-3.84-.36l-.76-.1.17-1.34a36 36 0 004.35.38q3.11 0 3.11-2.92A2 2 0 0048.1 64a6.64 6.64 0 00-2.55-.87 8.59 8.59 0 01-3.49-1.35A3.38 3.38 0 0141 59q0-3.91 4.68-3.91a25.83 25.83 0 013.68.31l.71.11-.07 1.4a39.48 39.48 0 00-4.18-.35zM60.06 68.59l.61-.06v1.24a30.21 30.21 0 01-4.1.34 3.69 3.69 0 01-3.21-1.31 7 7 0 01-.95-4.08q0-5.52 4.39-5.52a4 4 0 013.2 1.17 5.53 5.53 0 011.05 3.73L61 65.29h-6.95a4.31 4.31 0 00.63 2.58 2.58 2.58 0 002.19.84q1.57 0 3.19-.12zM59.49 64a4.56 4.56 0 00-.62-2.73 2.39 2.39 0 00-2-.8 2.58 2.58 0 00-2.1.84A4.24 4.24 0 0054 64zM67 70.1a3.52 3.52 0 01-3-1.24 7.29 7.29 0 01-.91-4.2 6.44 6.44 0 011.09-4.22q1.09-1.26 3.86-1.26l3.51.21v15.16H70v-5.14a6.89 6.89 0 01-3 .69zm1-9.56a3.09 3.09 0 00-2.68 1 5.49 5.49 0 00-.7 3.14 6.14 6.14 0 00.58 3.09 2.1 2.1 0 001.94.93 6.66 6.66 0 002.42-.46l.38-.15v-7.42q-1.27-.12-1.94-.12zM81.12 59.39h1.58v10.5h-1.58v-.73a6 6 0 01-3.12.94q-2.14 0-2.85-1.11a8.38 8.38 0 01-.7-4.12v-5.48H76v5.46a7.72 7.72 0 00.4 3.07q.4.78 1.81.78a5.21 5.21 0 001.41-.2 6.42 6.42 0 001.09-.39l.38-.19zM92.86 68.59l.61-.06v1.24a30.21 30.21 0 01-4.1.34 3.69 3.69 0 01-3.21-1.31 7 7 0 01-.95-4.08q0-5.52 4.39-5.52a4 4 0 013.17 1.19 5.53 5.53 0 011.05 3.73l-.08 1.2h-6.89a4.31 4.31 0 00.63 2.58 2.58 2.58 0 002.19.84q1.57-.03 3.19-.15zM92.29 64a4.56 4.56 0 00-.62-2.73 2.39 2.39 0 00-2-.8 2.58 2.58 0 00-2.1.84 4.24 4.24 0 00-.74 2.69zM96.45 69.89V54.81H98v15.08zM101.17 57v-1.81h1.57V57zm0 12.87V59.39h1.57v10.5zM105.14 60.8v-1.41h7.79v1.41l-5.88 7.69h5.88v1.41h-7.79v-1.42L111 60.8zM122.41 68.59l.61-.06v1.24a30.21 30.21 0 01-4.1.34 3.69 3.69 0 01-3.21-1.31 7 7 0 01-.95-4.08q0-5.52 4.39-5.52a4 4 0 013.17 1.19 5.53 5.53 0 011.05 3.73l-.08 1.2h-6.89a4.31 4.31 0 00.63 2.58 2.58 2.58 0 002.19.84q1.57-.03 3.19-.15zm-.57-4.59a4.56 4.56 0 00-.62-2.73 2.39 2.39 0 00-2-.8 2.58 2.58 0 00-2.1.84 4.24 4.24 0 00-.72 2.69z"/></svg>
        </div>
        <div className={styles.skills__card}>
        <svg className={styles.carrousel__img} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#cb3837" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"/></svg>
        </div>
      </div>
    </div>
  )
}

export default Skills
