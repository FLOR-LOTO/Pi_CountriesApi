import { useState } from "react";
import PropTypes from "prop-types";
import style from "./ImageModal.module.css"; // Estilos CSS para el modal

const ImageModal = ({
  src,
  alt,
  title,
  continent,
  pais,
  region,
  clima,
  deporte,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const modalStyles = {
    position: "fixed",
    top: 100,
    left: 250,
    width: "50%",
    height: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
    backgroundImage: `url(${src})`,
    backgroundSize: "100% 100%",
  };

  return (
    <>
      <div className={style.imageContainer} onClick={toggleModal}>
        <img src={src} alt={alt} />
        <div className={style.imageTitle}>{title}</div>
      </div>

      {isOpen && (
        <div style={modalStyles}>
          <div className={style.modalContent}>
            <div className={style.imageTitle}>{title}</div>
            <p>Continente: {continent}</p>
            <p>País: {pais}</p>
            <p>Región: {region}</p>
            <p>Clima: {clima}</p>
            <p>Deporte/Actividad: {deporte}</p>
            <button onClick={toggleModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

ImageModal.propTypes = {
  src: PropTypes.string.isRequired, // Valida que 'src' sea una cadena requerida
  title: PropTypes.string.isRequired, // Valida que 'title' sea una cadena requerida
  alt: PropTypes.string.isRequired, // Valida que 'alt' sea una cadena requerida
  continent: PropTypes.string.isRequired, // Valida que 'description' sea una cadena requerida
  pais: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  clima: PropTypes.string.isRequired,
  deporte: PropTypes.string.isRequired,
};

export default ImageModal;
