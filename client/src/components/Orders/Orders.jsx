import { orderCountries } from "../../redux/actions/actions.js";
import { connect } from "react-redux";
import style from "./Orders.module.css";
import PropTypes from "prop-types";
import React from "react"; // Asegúrate de importar React

class Orders extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerOrder = (order) => {
    const { orderCountries } = this.props;
    const { orderType, orderValue } = order;
    orderCountries({ orderType, orderValue });
  };

  render() {
    return (
      <div className={style.orderContainer}>
        <div className={style.order1}>
          <h1 className={style.title}>Nombre</h1>
          <select
            className={style.select}
            onChange={(e) => this.props.orderCountries("name", e.target.value)}
          >
            <option value="Asc">A - Z</option>
            <option value="Des">Z - A</option>
          </select>
        </div>

        <div className={style.order2}>
          <h1 className={style.title}>Población</h1>
          <select
            className={style.select}
            onChange={(e) =>
              this.props.orderCountries("population", e.target.value)
            }
          >
            <option value="Asc">Mayor a Menor</option>
            <option value="Des">Menor a Mayor</option>
          </select>
        </div>

        <div className={style.order3}>
          <h1 className={style.title}>Área</h1>
          <select
            className={style.select}
            onChange={(e) => this.props.orderCountries("area", e.target.value)}
          >
            <option value="Asc">Mayor a Menor</option>
            <option value="Des">Menor a Mayor</option>
          </select>
        </div>
      </div>
    );
  }
}

Orders.propTypes = {
  orderCountries: PropTypes.func.isRequired, // Agrega la validación de propiedades
};

export function mapDispatchToProps(dispatch) {
  return {
    orderCountries: (order) => dispatch(orderCountries(order)),
  };
}

export default connect(null, mapDispatchToProps)(Orders);
