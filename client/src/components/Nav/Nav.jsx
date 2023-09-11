import { Link } from "react-router-dom"; // nos permite crear links que nos llevan a las vistas
import { searchPropTypes } from "../propTypes";
import style from "./Nav.module.css";
import Orders from "../Orders/Orders.jsx";
import { Component } from "react";
import axios from "axios"; // Importa axios u otra biblioteca para hacer solicitudes HTTP

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedActivity: "", // Estado para la actividad seleccionada
      activities: [], // Estado para almacenar la lista de actividades
    };
  }

  componentDidMount() {
    // Llama a la API para obtener la lista de actividades
    axios
      .get("http://localhost:3001/activities")
      .then((response) => {
        this.setState({ activities: response.data });
      })
      .catch((error) => {
        console.error("Error al obtener actividades:", error);
      });
  }

  render() {
    return (
      <div className={style.navSidebar}>
        <nav>
          <div className={style.orderContainer}>
            <h1 className={style.titles}>Ordenar por :</h1>
            <Orders />
          </div>
          <h1 className={style.titles}>Buscar Actividad :</h1>
          <select
            className={style.filterActivities}
            value={this.state.selectedActivity}
            onChange={(e) => this.setState({ selectedActivity: e.target.value })}
          >
            <option value="">Seleccionar actividad</option>
            {/* Mapea las actividades disponibles y crea una opción para cada una */}
            {this.state.activities.map((activity) => (
              <option key={activity.id} value={activity.name}>
                {activity.name}
              </option>
            ))}
          </select>
  
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

export default Nav;
