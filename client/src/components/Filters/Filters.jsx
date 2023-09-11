import style from "./Filters.module.css";
import {
  filterCountries,
} from "../../redux/actions/actions.js";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import React from "react"; // Asegúrate de importar React



class Filters extends React.Component { // Cambia de función a clase
  static propTypes = {
    filterCountries: PropTypes.func.isRequired, // Agrega la validación de propiedades
  };

  handlerFilter = (filter) => { // Declara handlerFilter como una función de flecha
    const { filterCountries } = this.props;
    const { filterType, filterValue } = filter;
    filterCountries({ filterType, filterValue });
  };

  render() { // Agrega el método de renderización
    return (
      <div className={style.filterContainer}>
              <button
                className={style.btnFilter}
                onClick={() =>
                  this.handlerFilter({
                    filterType: "continent",
                    filterValue: "Oceania",
                  })
                }
              >
                Oceanía
              </button>
              <button
              className={style.btnFilter}
              onClick={() =>
                this.handlerFilter({
                  filterType: "continent",
                  filterValue: "Asia",
                })
              }
            >
              Asia
            </button>
            <button
              className={style.btnFilter}
              onClick={() =>
                this.handlerFilter({
                  filterType: "continent",
                  filterValue: "South America",
                })
              }
            >
              Sudamérica
            </button>
            <button
              className={style.btnFilter}
              onClick={() =>
                this.handlerFilter({
                  filterType: "continent",
                  filterValue: "Africa",
                })
              }
            >
              África
            </button>
            <button
             className={style.btnFilter}
              onClick={() =>
                this.handlerFilter({
                  filterType: "continent",
                  filterValue: "Europe",
                })
              }
            >
              Europa
            </button>
            <button
              className={style.btnFilter}
              onClick={() =>
                this.handlerFilter({
                  filterType: "continent",
                  filterValue: "North America",
                })
              }
            >
              Norte América
            </button>
            <button
              className={style.btnFilter}
              onClick={() =>
                this.handlerFilter({
                  filterType: "continent",
                  filterValue: "Antarctica",
                })
              }
            >
              Antártico
            </button>
          </div>
  );
}
  
}

export function mapDispatchToProps(dispatch) {
  return {
    filterCountries: (filter) => dispatch(filterCountries(filter)),
  };
}


export default connect(null, mapDispatchToProps)(Filters);