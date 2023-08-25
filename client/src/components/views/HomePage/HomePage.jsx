import SearchBar from "../../SearchBar/SearchBar.jsx";
import { useState } from "react";
import axios from "axios";
import Cards from "../../Cards/Cards.jsx";
import style from "./Home.module.css";

const HomePage = () => {

    const [countries, setCountries] = useState([])

    const onSearch = (id) => {  //cada vez que se haga click se deberan agregar los paises al estado,que actualmente es el arreglo vacio
    const idPais = id.toUpperCase();
        axios.get(`http://localhost:3001/countries/${idPais}`)
        .then(({ data }) => {
          // Verificar si el país ya está en el estado por su ID
          const isCountryAlreadyAdded = countries.some(country => country.idPais === data.id);
          
          if (!isCountryAlreadyAdded && data.id) {
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

    <div className={ style.container } >
        <SearchBar onSearch={onSearch}/>
        <Cards countries = {countries} /> 
    </div>
)};

export default HomePage;