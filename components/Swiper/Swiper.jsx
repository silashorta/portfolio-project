// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from "./Swiper.module.css"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        /* pagination={{
          clickable: true,
        }} */
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
                <SwiperSlide className={styles.carrousel__slide}>
                    <div className={styles.carrousel__items}>
                        <img src="../assets/images/skills/html-5.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>HTML5</h6>
                        <p className={styles.carrousel__descricao}>Transformo conceitos em código estruturado e semântico para construir bases sólidas para sites.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.carrousel__slide}>
                    <div>
                        <img src="../assets/images/skills/css-3.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>CSS3</h6>
                        <p className={styles.carrousel__descricao}>Utilizo CSS para dar vida à estética, criando atraentes e responsivos que cativam os usuários.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.carrousel__slide}>
                    <div>
                        <img src="../assets/images/skills/bootstrap.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>Bootstrap</h6>
                        <p className={styles.carrousel__descricao}>Sou apaixonado por JavaScript e o utilizo para criar interatividade e dinamismo em minhas aplicações web.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.carrousel__slide}>
                    <div>
                        <img src="../assets/images/skills/js.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>JavaScript</h6>
                        <p className={styles.carrousel__descricao}>Sou apaixonado por JavaScript e o utilizo para criar interatividade e dinamismo em minhas aplicações web.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.carrousel__slide}>
                    <div>
                        <img src="../assets/images/skills/biblioteca.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>React</h6>
                        <p className={styles.carrousel__descricao}>Sou apaixonado por JavaScript e o utilizo para criar interatividade e dinamismo em minhas aplicações web.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.carrousel__slide}>
                    <div>
                        <img src="../assets/images/skills/node-js.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>NodeJS</h6>
                        <p className={styles.carrousel__descricao}>Sou apaixonado por JavaScript e o utilizo para criar interatividade e dinamismo em minhas aplicações web.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.carrousel__slide}>
                    <div>
                        <img src="../assets/images/skills/mysql.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>MySQL</h6>
                        <p className={styles.carrousel__descricao}>Sou apaixonado por JavaScript e o utilizo para criar interatividade e dinamismo em minhas aplicações web.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.carrousel__slide}>
                    <div>
                        <img src="../assets/images/skills/git.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>Git</h6>
                        <p className={styles.carrousel__descricao}>Sou apaixonado por JavaScript e o utilizo para criar interatividade e dinamismo em minhas aplicações web.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
