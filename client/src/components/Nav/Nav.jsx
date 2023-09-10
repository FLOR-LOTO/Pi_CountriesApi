import React from "react";
import { Link } from "react-router-dom"; // nos permite crear links que nos llevan a las vistas
import { searchPropTypes } from "../propTypes";
import style from "./Nav.module.css";
import {
  orderCountries,
  filterCountries,
} from "../../redux/actions/actions.js";
import { connect } from "react-redux";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerFilter = (filter) => {
    const { filterCountries } = this.props;
    const { filterType, filterValue } = filter;
    filterCountries({ filterType, filterValue });
  };

  handlerOrder = (order) => {
    const { orderCountries } = this.props;
    const { orderType, orderValue } = order;
    orderCountries({ orderType, orderValue });
  };

  render() {
    return (
      <div className={style.navSidebar}>
        <nav>
          <div>
            <Link to={"/countries"}>
              <button className={style.btn}>Países</button>
            </Link>
              {/* orden de paises */}
          <div className={style.orderContainer}>
            <h1 className={style.title}>Orden por Nombre</h1>
            <select className={style.select}
              onChange={(e) =>
                this.props.orderCountries("name", e.target.value)
              }
            >
              <option value="Asc">A - Z</option>
              <option value="Des">Z - A</option>
            </select>

            <h1 className={style.title}>Orden por Población</h1>
            <select className={style.select}
              onChange={(e) =>
                this.props.orderCountries("population", e.target.value)
              }
            >
              <option value="Asc">Mayor a Menor</option>
              <option value="Des">Menor a Mayor</option>
            </select>
          </div>

          </div>

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
                this.handlerOrder({
                  filterType: "continent",
                  filterValue: "Antarctica",
                })
              }
            >
              Antártico
            </button>
          </div>
          <Link to={"/activities"}>
              <button className={style.btn}>Crear Actividades</button>
            </Link>
          <Link to={"/"}>
            <button className={style.btnOut}>Salir</button>
          </Link>
        </nav>
      </div>
    );
  }
}

Nav.propTypes = searchPropTypes;

export function mapDispatchToProps(dispatch) {
  return {
    filterCountries: (filter) => dispatch(filterCountries(filter)),
    orderCountries: (order) => dispatch(orderCountries(order)),
  };
}

export default connect(null, mapDispatchToProps)(Nav);
