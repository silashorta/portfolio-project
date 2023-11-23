// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/swiper-bundle.css';
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
                    delay: 5000,
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
                        <p className={styles.carrousel__descricao}>
                            Com conhecimento em HTML5, transformo conceitos e designs em código estruturado e semântico. Construo bases sólidas para sites, garantindo uma experiência de usuário consistente.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.carrousel__slide}>
                    <div>
                        <img src="../assets/images/skills/css-3.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>CSS3</h6>
                        <p className={styles.carrousel__descricao}>
                            Como entusiasta do design, utilizo CSS3 para dar vida à estética. Minha paixão está em criar layouts atraentes e responsivos que cativam os usuários, proporcionando uma experiência visual excepcional.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.carrousel__slide}>
                    <div>
                        <img src="../assets/images/skills/bootstrap.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>Bootstrap</h6>
                        <p className={styles.carrousel__descricao}>
                            Com o Bootstrap, crio designs responsivos e agradáveis. Utilizo o poder deste framework para garantir uma experiência consistente em diferentes dispositivos, facilitando a interação do usuário.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.carrousel__slide}>
                    <div>
                        <img src="../assets/images/skills/js.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>JavaScript</h6>
                        <p className={styles.carrousel__descricao}>
                            Utilizo JavaScript para criar interatividade e dinamismo em minhas aplicações web. Transformo ideias em recursos interativos que elevam a experiência do usuário.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.carrousel__slide}>
                    <div>
                        <img src="../assets/images/skills/biblioteca.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>React</h6>
                        <p className={styles.carrousel__descricao}>
                            Com proficiência em React, construo interfaces de usuário modernas e reativas. Minhas habilidades nesta biblioteca JavaScript garantem aplicações web escaláveis e eficientes.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.carrousel__slide}>
                    <div>
                        <img src="../assets/images/skills/node-js.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>NodeJS</h6>
                        <p className={styles.carrousel__descricao}>
                            Utilizo NodeJS para desenvolver servidores e toda parte backend. Crio aplicações que lidam com dados de maneira rápida e confiável.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.carrousel__slide}>
                    <div>
                        <img src="../assets/images/skills/mysql.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>MySQL</h6>
                        <p className={styles.carrousel__descricao}>
                            Com o MySQL, desenvolvo e mantenho bancos de dados eficientes. Preservando a integridade e segurança dos dados, proporcionando aplicações robustas e confiáveis.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.carrousel__slide}>
                    <div>
                        <img src="../assets/images/skills/git.png" alt="" className={styles.carrousel__img} />
                        <h6 className={styles.carrousel__titulo}>Git</h6>
                        <p className={styles.carrousel__descricao}>
                            Utilizo Git como sistema de controle de versão para gerenciar eficientemente o desenvolvimento de projetos. Minha experiência garante um fluxo de trabalho colaborativo e organizado.
                        </p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
