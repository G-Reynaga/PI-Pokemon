import axios from "axios";
import {
  GET_POKEMONS,
  GET_POKEMON,
  GET_TYPES,
  SEARCH_BY_NAME,
  FILTER_BY_SOURCE,
  FILTER_BY_TYPE,
  ORDER_BY,
} from "./actions-types";

export const getPks = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get("/pokemon");
      const pks = apiData.data;
      dispatch({ type: GET_POKEMONS, payload: pks });
    } catch (error) {
      return "Something went wrong. Please try again." + error.message;
    }
  };
};

export const getPk = (id) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`/pokemon/${id}`);
      const pk = apiData.data;
      dispatch({ type: GET_POKEMON, payload: pk });
    } catch (error) {
      return "Something went wrong. Please try again." + error.message;
    }
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get("/types");
      const types = apiData.data;
      dispatch({ type: GET_TYPES, payload: types });
    } catch (error) {
      return "Something went wrong. Please try again." +  error.message;
    }
  };
};

export const searchByName = (name) => {
  return { type: SEARCH_BY_NAME, payload: name };
};

export const orderBy = (criteria) => {
  return { type: ORDER_BY, payload: criteria };
};

export const filterBySource = (createdAt) => {
  return { type: FILTER_BY_SOURCE, payload: createdAt };
};

export const filterByType = (type) => {
  return { type: FILTER_BY_TYPE, payload: type };
};
