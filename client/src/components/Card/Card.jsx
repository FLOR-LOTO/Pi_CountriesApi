import {cardPropTypes} from "../propTypes.js"
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card ({id, name, flags }) {

    return (
        <div className={style.container}>
            {/* <button className={style.btn} onClick={onClose}>X</button>  */}
            <h2>{name}</h2>
            <Link to={`/detail/${id}`}>
            <img src={flags} alt="" />
            </Link>
        </div>
    )
}

Card.propTypes = cardPropTypes;
