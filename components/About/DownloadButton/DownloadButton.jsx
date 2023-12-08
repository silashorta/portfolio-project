import React from 'react';
import { saveAs } from 'file-saver';
import styles from './DownloadButton.module.css'

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfUrl = '../../public/assets/files/Curriculo.pdf';

    // Use a função saveAs para iniciar o download do arquivo
    saveAs(pdfUrl, 'Curriculo.pdf');
  };

  return (
    <button data-aos="flip-up" className={styles.downloadButton} onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadButton;
