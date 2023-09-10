import { useParams } from "react-router-dom"; //obtiene el ID, nos devuelve un objeto con el valor que es dinamico en la url
import { useState, useEffect } from "react"; // se activa con los cambios de ciclos
import style from "./Detail.module.css";

const DetailPage = () => {
  const { id } = useParams();
  const [countriesID, setCountriesID] = useState({});
  const [countryActivities, setCountryActivities] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/countries/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCountriesID(data);
          fetch(`http://localhost:3001/countries/${id}/activities`)
            .then((response) => response.json())
            .then((activitiesData) => {
              setCountryActivities(activitiesData);
            })
            .catch((error) => {
              console.error("Error al obtener actividades:", error);
            });
        } else {
          window.alert("No hay países con ese ID");
        }
      })
      .catch((error) => {
        console.error("Error al obtener país:", error);
      });
  }, [id]);

  const containerStyle = {
    backgroundImage: `url(${countriesID.flags})`,
    backgroundSize: "cover", // Ajustar la imagen de fondo para cubrir todo el contenedor
    backgroundPosition: "center", // Centrar la imagen de fondo
  };

  return (
    <div className={style.container}  style={containerStyle}>
      <h1 className={style.name}>{countriesID.name}</h1>
      <div className={style.imgText}>
        <img className={style.img} src={countriesID.flags} alt="" />
        <p className={style.text}>
          {countriesID.name} se encuentra ubicado en {countriesID.continents}.
          <br></br>Su capital es {countriesID.capital} y pertenece a la
          subregión de {countriesID.subregion}.<br></br> Con un área total de{" "}
          {countriesID.area} km², el país alberga una población de{" "}
          {countriesID.population} personas.
        </p>
        <div className={style.activities}>
        <h3>Actividades para realizar en {countriesID.name}:</h3>
        <ul>
          {countryActivities.map((activity) => (
            <li key={activity.id}>
              {activity.name}<br /> Dificultad: {activity.difficulty}
              <br /> Duración de la actividad: {activity.duration}
              <br /> Época del año: {activity.season}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default DetailPage;
