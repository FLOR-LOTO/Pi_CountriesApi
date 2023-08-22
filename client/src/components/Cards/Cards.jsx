import Card from "../Card/Card.jsx"
import {cardsPropTypes} from "../propTypes.js"
import style from "./Cards.module.css"

export default function Cards ({countries}) {

    return (
        <div className={style.container}>{
           countries.map(({id, name, continents, capital, subregion, area, population, flags, onClose }) => (
            <Card 
            key={id}
            id={id}
            name={name}
            continents={continents}
            capital={capital}
            subregion={subregion}
            area={area}
            population={population}
            flags={flags}
            onClose={onClose}
            />
           ))
        }</div>
    )
}

Cards.propTypes = cardsPropTypes;