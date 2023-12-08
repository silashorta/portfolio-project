import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import styles from './DownloadButton.module.css'
import iconePDF from './download-direto.png'
import iconeClicado from './icone-clicado.png'


const DownloadButton = () => {
  const [isHovered, setIsHovered] = useState(false);


  const handleDownload = () => {
    
    const pdfUrl = '../../assets/files/Curriculo.pdf';
    
    // Use a função saveAs para iniciar o download do arquivo
    saveAs(pdfUrl, 'Curriculo.pdf');
  };


  return (
    <div>
      <button
        data-aos="flip-up"
        className={styles.downloadButton}
        onClick={handleDownload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Download CV

        <img src={isHovered ? iconeClicado : iconePDF}
          alt=""
          className={styles.pdfIcon} />
      </button>
    </div>
  );
};

export default DownloadButton;
