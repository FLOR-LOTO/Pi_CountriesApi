/* eslint-disable no-case-declarations */
import {
  FILTER_COUNTRIES,
  ORDER_COUNTRIES,
  GET_COUNTRIES,
} from "./actions/actions.types.js";

const initialState = {
  countries: [],
  countriesFilter: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // que ambos se carguen con la info de paises para no perder informacion en el filtrado
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
        countriesFilter: payload,
      };
    // componente (actions) //filterType me define tipo de filtro (lo que llega de payload a la action)
    case FILTER_COUNTRIES:
      const { filterType, filterValue } = payload;
      const filteredCountries = state.countries.filter((country) => {
        switch (filterType) {
          case "continent":
            return country.continents === filterValue;

          case "activity":
            return country.Activities.some(
              (activity) => activity.name === filterValue
            );
          default:
            return false;
        }
      });
      //copio el estado y retorno el filtrado
      return {
        ...state,
        countriesFilter: filteredCountries,
      };
    // componente (actions) //orderType me define tipo de orden (lo que llega de payload a la action)
    case ORDER_COUNTRIES:
      const { orderType, sortOrder } = payload;
      let newOrder;

      // Verifica el orden actual y decide si es necesario invertirlo
      if (state.currentOrder && state.currentOrder.orderType === orderType) {
        newOrder = state.currentOrder.sortOrder === "Asc" ? "Desc" : "Asc";
      } else {
        newOrder = sortOrder;
      }

      switch (orderType) {
        case "name":
          const orderName = [...state.countriesFilter].sort((a, b) => {
            if (newOrder === "Asc") return a.name.localeCompare(b.name);
            else return b.name.localeCompare(a.name);
          });
          return {
            ...state,
            countriesFilter: orderName,
            currentOrder: { orderType, sortOrder: newOrder },
          };
        case "population":
          const orderPopulation = [...state.countriesFilter].sort((a, b) => {
            if (newOrder === "Asc") return a.population - b.population;
            else return b.population - a.population;
          });
          return {
            ...state,
            countriesFilter: orderPopulation,
            currentOrder: { orderType, sortOrder: newOrder },
          };
        case "area":
          const orderArea = [...state.countriesFilter].sort((a, b) => {
            if (newOrder === "Asc") return a.area - b.area;
            else return b.area - a.area;
          });
          return {
            ...state,
            countriesFilter: orderArea,
            currentOrder: { orderType, sortOrder: newOrder },
          };
      }
      break;
    default:
      return state;
  }
};

export default reducer;
