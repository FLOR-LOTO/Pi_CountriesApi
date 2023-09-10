import { cardPropTypes } from "../propTypes.js";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, flags }) => {
  return (
    <div className={style.cardContainer}>
      <div>
        <Link to={`/detail/${id}`}>
          <img src={flags} alt="" />
        </Link>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

Card.propTypes = cardPropTypes;

export default Card;
