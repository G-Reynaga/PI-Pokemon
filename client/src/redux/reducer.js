import {
  GET_POKEMONS,
  GET_POKEMON,
  GET_TYPES,
  SEARCH_BY_NAME,
  FILTER_BY_SOURCE,
  FILTER_BY_TYPE,
  ORDER_BY,
} from "./actions-types";

const initialState = {
  pks: [],
  pkToOrder: [],
  types: [],
  pk: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pks: action.payload,
        pkToOrder: action.payload,
      };
    case GET_POKEMON:
      return {
        ...state,
        pk: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        pkToOrder: state.pks.filter((pk) => pk.name === action.payload),
      };
    case FILTER_BY_SOURCE:
      let createdPks;
      if (action.payload === "Db")
        createdPks = [...state.pks].filter((pk) => pk.createdAt);
      if (action.payload === "Api")
        createdPks = [...state.pks].filter((pk) => !pk.createdAt);
      return {
        ...state,
        pkToOrder: action.payload === "Reset" ? state.pks : createdPks,
      };
    case FILTER_BY_TYPE:
      return {
        ...state,
        pkToOrder: state.pks.filter((pk) => pk.Types.includes(action.payload)),
      };
    case ORDER_BY:
      return {
        ...state,
        pkToOrder: [...state.pkToOrder].sort((a, b) => {
          if (action.payload === "A - Z") {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          } else if (action.payload === "Z - A") {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
          } else if (action.payload === "Higher Attack") {
            if (a.attack > b.attack) return -1;
            return 0;
          } else if (action.payload === "Lower Attack") {
            if (a.attack < b.attack) return -1;
            return 0;
          }
          return 0;
        }),
      };
    default:
      return { ...state };
  }
};

export default reducer;
