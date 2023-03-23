const axios = require("axios");
const { Type } = require("../db");
const { URL_API_POKEMON_TYPE } = require("../utils/GolbalConst");

const getAllTypes = async () => {
  try {
    const typesApi = await axios.get(URL_API_POKEMON_TYPE);
    return typesApi.data.results;
  } catch (error) {
    return error.message;
  }
};

const saveTypeDb = async (types) => {
  try {
    for (let i = 0; i < types.length; i++) {
      const type = types[i];
      await Type.findOrCreate({ where: { name: type.name } });
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllTypes,
  saveTypeDb,
};
