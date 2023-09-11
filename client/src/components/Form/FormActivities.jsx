import { useState, useEffect } from "react";
import axios from "axios";
import style from "./FormActivities.module.css";
import { validations } from "./validations.js";
import { Link } from "react-router-dom";

const Form = () => {
  const [countries, setCountries] = useState([]);

  const [createActivity, setcreateActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: "",
  });

  useEffect(() => {
    // Obtener la lista de países al cargar el componente
    async function fetchCountries() {
      try {
        const response = await axios.get("http://localhost:3001/countries");
        setCountries(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de países:", error);
      }
    }
    fetchCountries();
  }, []);

  const [error, setError] = useState({});
  console.log(error);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    try {
      const response = await axios.post(
        "http://localhost:3001/activities",
        createActivity
      );

      if (response.status === 200) {
        // La actividad se creó correctamente, puedes mostrar un mensaje de éxito
        console.log("Actividad creada exitosamente:", response.data);
      } else {
        // En caso de que el servidor responda con un código de estado diferente de 200
        console.error("Error al crear actividad:", response.statusText);
      }
    } catch (error) {
      // Si ocurre un error durante la solicitud
      console.error("Error al crear actividad:", error);
    }
  };

  const handleChange = (event) => {
    //refleja el texto que ingresa el cliente
    const nameProperty = event.target.name;
    const value = event.target.value;

    setError(
      validations({
        ...createActivity,
        [nameProperty]: value,
      })
    );

    setcreateActivity({
      ...createActivity,
      [nameProperty]: value,
    });
  };

  return (
    <div className={style.containerForm}>
      <form onSubmit={handleSubmit}>
        <Link to={"/countries"}>
          <button className={style.btnBack}>X</button>
        </Link>
        <h1>Crea una Actividad Turística</h1>

        <div className={style.camp}>
          <label className={style.label}>Actividad</label>
          <input
            className={style.input}
            value={createActivity.nombre}
            type="text"
            name="name"
            placeholder="Ingresa el nombre de la actividad..."
            onChange={handleChange}
          />
          <span>{error.name}</span>
        </div>

        <div className={style.camp}>
          <label className={style.label}>Duración</label>
          <select
            className={style.select}
            name="duration"
            value={createActivity.duration}
            onChange={handleChange}
          >
            <option className={style.input} value="">
              Seleccione la duración
            </option>
            <option value="30">30 min</option>
            <option value="1">1 hora</option>
            <option value="1.5">1.5 horas</option>
            <option value="2">2 horas</option>
            <option value="2.5">2.5 horas</option>
            <option value="3">3 horas</option>
            <option value="mayor a 3 horas">mayor a 3 horas</option>
          </select>
          <span>{error.duration}</span>
        </div>

        <div className={style.camp}>
          <label className={style.label}>Dificultad</label>
          <select
            className={style.select}
            name="difficulty"
            value={createActivity.difficulty}
            onChange={handleChange}
          >
            <option className={style.input} value="">
              Seleccione la dificultad
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <span>{error.difficulty}</span>
        </div>

        <div className={style.camp}>
          <label className={style.label}>Temporada</label>
          <select
            className={style.select}
            name="season"
            value={createActivity.season}
            onChange={handleChange}
          >
            <option className={style.input} value="">
              Seleccione la temporada ideal
            </option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
          <span>{error.season}</span>
        </div>

        <div className={style.camp}>
          <label className={style.label}>País</label>
          <select
            className={style.select}
            name="country"
            value={createActivity.country}
            onChange={handleChange}
          >
            <option value="">Seleccione un país</option>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <span>{error.country}</span>
        </div>
        <div className={style.containerBtn}>
          <button className={style.btn} type="submit">
            CREAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
