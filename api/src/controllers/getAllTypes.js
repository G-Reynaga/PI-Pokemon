const { Type } = require("../db");
const axios = require("axios");
const { URL_API_POKEMON_TYPE } = require("../utils/GolbalConst");

const getAllTypes = async () => {
  try {
    const typesApi = await axios.get(URL_API_POKEMON_TYPE);
    return typesApi.data.results;
  } catch (error) {
    return error.message
  }
};

module.exports = getAllTypes;
