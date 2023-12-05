// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import styles from './Swiperprojects.module.css'

export default function SwiperProjects() {

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
      imageUrl: "to-do-list.png",
      descricao: `O projeto é um portfólio web desenvolvido em React, destacando as habilidades e trabalhos de um desenvolvedor. Utiliza diversas dependências para aprimorar a experiência do usuário, incluindo bibliotecas como "@ramonak/react-progress-bar" para barras de progresso, "animate.css" para animações e "swiper" para carrosséis interativos. A integração de "nodemailer" facilita o envio de e-mails, "express" e "cors" são empregados para o backend, e "formik" gerencia formulários. O uso de "react-intersection-observer" e "react-visibility-sensor" lida com a visibilidade de elementos. O React, na versão mais recente, é a base principal, evidenciando a modernidade e escalabilidade do projeto.`,
      siteUrl: "https://portfolio-project-fxes6cdti-silashorta.vercel.app/",
      projetoUrl: "https://github.com/silashorta/portfolio-project",
      icons: ["biblioteca.png", "bootstrap.png", "git.png"]
    }
  ]

  return (
    <div className={styles.swiperProjects__container}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {infoCard.map((card, index) => (
          <SwiperSlide key={index}>
            <div className={styles.swiperProjects__card}>
              <div className={styles.swiperProjects__card_container}>
                <h5>{card.titulo}</h5>
                <div>
                  <img src={`../../assets/images/${card.imageUrl}`} alt="" className={styles.swiperProjects__image} />
                </div>
                <div>
                  <p>{card.descricao}</p>
                  <div>
                    {card.icons.map((icon, iconIndex) => (
                      <img
                        key={iconIndex}
                        src={`../../assets/images/skills/${icon}`}
                        alt={`Icon ${iconIndex + 1}`}
                        className={styles.skills__icon}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.swiperProjects__buttons}>
                <a href={card.siteUrl} rel='noreferrer' target='_blank'>
                  <button className={styles.swiperProjects__button}>Site</button>
                </a>
                <a href={card.projetoUrl} rel='noreferrer' target='_blank'>
                  <button className={styles.swiperProjects__button}>Projeto</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
