import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {searchPropTypes} from "../propTypes"
import style from "./Nav.module.css";


class Nav extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
        <nav className={style.container}>
            <SearchBar onSearch={this.props.onSearch}/>
        </nav>
    )}
}

Nav.propTypes = searchPropTypes;

export default Nav;