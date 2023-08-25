import {searchPropTypes} from "../propTypes.js"
import style from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar ({onSearch}) {

    const [id, setId] = useState('');
    console.log(id, setId);

    const handleChange = (event) => { // cada vez que el usuario escriba en el input deberia guardarse en el estado id
        setId (event.target.value) //captura el valor que ingresa el usuario
    };

    return (
        <div className={style.container}>
            <input 
            className={style.input} 
            type='search' 
            placeholder="Ingresa el nombre del país..."
            onChange={handleChange} 
            // value={id}
            /> 
            <button 
            className={style.btnSearch} 
            onClick={() => onSearch(id)}>Buscar
            </button>
           
        </div>
    )
}

SearchBar.propTypes = searchPropTypes;