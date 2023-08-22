import {cardPropTypes} from "../propTypes.js"
import style from "./Card.module.css";

export default function Card ({id, name, continents, capital, subregion, area, population, flags, onClose }) {

    return (
        <div className={style.container}>
            <button onClick={onClose}>X</button> 
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{continents}</h2>
            <h2>{capital}</h2>
            <h2>{subregion}</h2>
            <h2>{area}</h2>
            <h2>{population}</h2>
            <img src={flags} alt="" />
        </div>
    )
}

Card.propTypes = cardPropTypes;
