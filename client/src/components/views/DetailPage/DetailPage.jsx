import { useParams } from "react-router-dom"; //obtiene el ID, nos devuelve un objeto con el valor que es dinamico en la url
import { useState, useEffect } from "react"; // se activa con los cambios de ciclos
import style from "./Detail.module.css";



const DetailPage = () => {

    const { id } = useParams();
    const [ countriesID, setCountriesID ] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/countries/${id}`)
        .then(response => response.json())
        .then((data) => {
          if (data.name) {
            setCountriesID(data);
          } else {
            window.alert("No hay personaje con ese ID");
          }
    })
    return setCountriesID({});
}, [id]);

    return (
    <div className= { style.container } id= {style.background}>
        <h1>{countriesID.name}</h1>
        <img src={countriesID.flags} alt="" />        
        <h2>{countriesID.continents}</h2>
        <h2>{countriesID.capital}</h2>
        <h2>{countriesID.subregion}</h2>
        <h2>{countriesID.area}</h2>
        <h2>{countriesID.population}</h2>
    </div>
)};

export default DetailPage;