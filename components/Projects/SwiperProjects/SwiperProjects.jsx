// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import styles from './Swiperprojects.module.css'

export default function SwiperProjects() {

  const infoCard = [
    {
      titulo: "Busca CEP",
      imageUrl: "busca-cep.png",
      descricao: "O projeto consistiu na criação de um sistema capaz de acessar a API de busca de CEP, proporcionando aos usuários uma maneira rápida e eficiente de obter informações detalhadas sobre determinado endereço. A API escolhida permitiu uma integração simplificada, garantindo a obtenção de dados precisos e atualizados.",
      siteUrl: "https://busca-cep-ebon.vercel.app",
      projetoUrl: "https://github.com/silashorta/Busca-CEP"
    }, {
      titulo: "Número Secreto",
      imageUrl: "numero_secreto.png",
      descricao: "O projeto consistiu na criação de um jogo envolvente onde os jogadores utilizam comandos de voz para tentar adivinhar o número secreto. O JavaScript foi a principal linguagem de programação empregada para garantir a interatividade e dinamismo necessários para essa experiência de jogo.",
      siteUrl: "https://jogo-numero-secreto-phi-neon.vercel.app",
      projetoUrl: "https://github.com/silashorta/jogo-numero-secreto"
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
        modules={[Pagination, Navigation]}
        className="mySwiper"
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
