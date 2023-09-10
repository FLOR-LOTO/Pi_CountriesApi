import {
  GET_COUNTRIES,
  FILTER_COUNTRIES,
  ORDER_COUNTRIES,
} from "./actions.types.js";
import axios from "axios";

export const getCountries = (name) => {
  //pido info

  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/countries/?name=${name}`
      );
      return dispatch({
        type: GET_COUNTRIES, //tipo de accion
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterCountries = (filterType) => {
  //filterType sera un objeto
  return {
    type: FILTER_COUNTRIES,
    payload: filterType,
  };
};

export const orderCountries = (orderType, sortOrder) => {
  //orderType sera un objeto
  return {
    type: ORDER_COUNTRIES,
    payload: {orderType, sortOrder},
  };
};
