import React from 'react'
import styles from './Projects.module.css'
import SwiperProjects from './SwiperProjects/SwiperProjects'

function Projects() {
  return (
    <div id='projects' className={styles.projects__container}>
      <div className={styles.projects__descricao}>
        <h3>Meus Projetos</h3>
        <p>Aqui estão alguns exemplos dos projetos que desenvolvi. Cada projeto representa uma oportunidade emocionante de criar soluções digitais únicas e impactantes.</p>
      </div>
      <SwiperProjects />
    </div>
  )
}

export default Projects
