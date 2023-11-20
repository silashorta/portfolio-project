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
      descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum soluta rerum adipisci nemo porro. Est perspiciatis recusandae earum laboriosam non dolores repellendus quis hic doloribus vero? Alias officia explicabo facilis!",
      siteUrl: "https://busca-cep-ebon.vercel.app",
      projetoUrl: "https://github.com/silashorta/Busca-CEP"
    }, {
      titulo: "Número Secreto",
      imageUrl: "numero_secreto.png",
      descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum soluta rerum adipisci nemo porro. Est perspiciatis recusandae earum laboriosam non dolores repellendus quis hic doloribus vero? Alias officia explicabo facilis!",
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
                  <img src={`../../public/assets/images/${card.imageUrl}`} alt="" className={styles.swiperProjects__image} />
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
