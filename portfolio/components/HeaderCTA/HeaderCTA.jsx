import React from 'react'
import styles from './HeaderCTA.module.css'

function HeaderCTA() {
  return (
    <div className={styles.cta__container}>
      <div className={styles.cta__text}>
        <h3>Meu Mundo Digital!</h3>
        <p>Você está pronto para mergulhar no universo da programação e design web? Descubra o que posso criar para você! Explore meu portfolio e veja como posso transformar ideias em experiências digitais incríveis.</p>
      </div>
      <div className={styles.cta__buttons}>
        <button>Ver Projetos</button>
        <button>Contato</button>
      </div>
    </div>
  )
}

export default HeaderCTA
