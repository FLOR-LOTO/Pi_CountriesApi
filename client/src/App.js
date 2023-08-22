import style from "./App.module.css"
import Cards from "./components/Cards/Cards.jsx";
import { useState } from "react"; // hook me da el estado actual para componentes funcionales
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";


function App() {

  const [countries, setCountries] = useState([]) //entre los parentesis le indicamos que tipo de dato va a ser, string,array, boolen, etc

  const onSearch = (name) => {  //cada vez que se haga click se deberan agregar los paises al estado,que actualmente es el arreglo vacio
    
    axios.get(`http://localhost:3001/countries/?name=${name}`)
    .then(({ data }) => {
      // Verificar si el país ya está en el estado por su ID
      const isCountryAlreadyAdded = countries.some(country => country.name === data.name);
      
      if (!isCountryAlreadyAdded && data.name) {
        // Agregar el país al estado solo si no existe y tiene un nombre válido
        setCountries((oldCountries) => [...oldCountries, data]);
      } else if (isCountryAlreadyAdded) {
        window.alert("El país ya ha sido agregado.");
      } else {
        window.alert("No se pudo agregar el país. Verifica los datos.");
      }
    })
    .catch(error => {
      console.error("Error al obtener el país:", error);
      window.alert("País no encontrado");
    });
};


  return (
      <div className={style.container}>
        <Nav onSearch={onSearch} />
        <Cards countries = {countries} />
      </div>
  );
}

export default App;
