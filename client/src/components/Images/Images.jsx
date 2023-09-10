import style from "./Images.module.css";
import { imageData } from "../../imageData.js";
import ImageModal from "./ImageModal";

const Images = () => {
  return (
    <div className={style.images}>

      {imageData.map((image) => (
        <ImageModal
          key={image.id}
          src={image.src}
          alt={image.alt}
          title={image.title}
          continent={image.continent}
          pais={image.pais}
          region={image.region}
          clima={image.clima}
          deporte={image.deporte}
          ubicacion={image.ubicacion}
        />
      ))}
    </div>
  );
};

export default Images;
