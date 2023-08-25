import React from "react";
import { Link } from "react-router-dom"; // nos permite crear links que nos llevan a las vistas
// import SearchBar from "../SearchBar/SearchBar";
import {searchPropTypes} from "../propTypes"
import style from "./Nav.module.css";


class Nav extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
        <div className={style.container}>
        <nav className={style.nav}>
            <Link to={'/countries'}>
            <button className={style.btn}>Países</button>
            </Link>
            <Link to={'/activities'}>
            <button className={style.btn}>Formulario de actividades</button>
            </Link>
            <Link to={'/'}>
            <button className={style.btnOut}>Salir</button>
            </Link>
        </nav>
        </div>
    )}
}

Nav.propTypes = searchPropTypes;

export default Nav;