import React, { useEffect, useRef, useState } from 'react'
import styles from './Projects.module.css'
import SwiperProjects from './SwiperProjects/SwiperProjects'
import { useInView } from 'react-intersection-observer';

function Projects() {

  const infoCard = [
    {
      titulo: "Busca CEP",
      imageUrl: "busca-cep.png",
      descricao: "O projeto consistiu na criação de um sistema capaz de acessar a API de busca de CEP, proporcionando aos usuários uma maneira rápida e eficiente de obter informações detalhadas sobre determinado endereço. A API escolhida permitiu uma integração simplificada, garantindo a obtenção de dados precisos e atualizados.",
      siteUrl: "https://busca-cep-ebon.vercel.app",
      projetoUrl: "https://github.com/silashorta/Busca-CEP",
      icons: ["html-5.png", "css-3.png", "bootstrap.png", "js.png", "git.png"]
    }, {
      titulo: "Número Secreto (Desktop apenas)",
      imageUrl: "numero_secreto.png",
      descricao: "O projeto consistiu na criação de um jogo envolvente onde os jogadores utilizam comandos de voz para tentar adivinhar o número secreto. O JavaScript foi a principal linguagem de programação empregada para garantir a interatividade e dinamismo necessários para essa experiência de jogo.",
      siteUrl: "https://jogo-numero-secreto-phi-neon.vercel.app",
      projetoUrl: "https://github.com/silashorta/jogo-numero-secreto",
      icons: ["html-5.png", "css-3.png", "js.png", "git.png"]
    }, {
      titulo: "ToDo List",
      imageUrl: "to-do-list.png",
      descricao: `Este projeto é uma aplicação web de lista de tarefas (ToDo List) desenvolvida utilizando a biblioteca React. A aplicação permite criar diferentes listas de tarefas, cada uma associada a uma categoria específica, como "Work Files", "Personal Files", "To-Do", e "Others". Cada lista de tarefas é representada por um card, apresentando um título, uma cor de fundo distinta e uma área para adicionar novas tarefas. As tarefas são exibidas em uma lista abaixo do formulário de adição, e cada tarefa pode ser removida individualmente.`,
      siteUrl: "https://to-do-list-seven-psi.vercel.app/",
      projetoUrl: "https://github.com/silashorta/ToDo-List",
      icons: ["biblioteca.png", "bootstrap.png", "git.png"]
    }, {
      titulo: "Portfólio",
      imageUrl: "portfolio.png",
      descricao: `O projeto é um portfólio web desenvolvido em React. Utilizo diversas dependências para aprimorar a experiência do usuário, incluindo bibliotecas como "@ramonak/react-progress-bar" para barras de progresso, "animate.css" para animações e "swiper" para carrosséis interativos. A integração de "nodemailer" facilita o envio de e-mails, "express" e "cors" são empregados para o backend, e "formik" gerencia formulários. O uso de "react-intersection-observer" e "react-visibility-sensor" lida com a visibilidade de elementos.`,
      siteUrl: "https://silashortaportfolio.vercel.app/",
      projetoUrl: "https://github.com/silashorta/portfolio-project",
      icons: ["biblioteca.png", "bootstrap.png", "node-js.png", "express.png", "git.png"]
    }
  ]

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
      </div>
      <div className={styles.projects__bloco}>
        <div>
          <SwiperProjects />
        </div>
        <div className={styles.projects__bloco_galeria}>
          {infoCard.map((card, index) => (
            <div key={index} className={styles.projects__bloco_card}>
              <p>{card.titulo}</p>
              <div>
                <img src={`../../assets/images/${card.imageUrl}`} alt="" className={styles.projects__bloco_image} />
              </div>
              <div>
                <div className={styles.projects__buttons}>
                  <a href={card.siteUrl} rel='noreferrer' target='_blank'>
                    <button data-aos="flip-up" className={styles.projects__button}>Site</button>
                  </a>
                  <a href={card.projetoUrl} rel='noreferrer' target='_blank'>
                    <button data-aos="flip-up" className={styles.projects__button}>Projeto</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
