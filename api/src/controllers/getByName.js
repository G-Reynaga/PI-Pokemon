const { Pokemon, Type } = require("../db");
const { URL_API_POKEMON_ID_OR_NAME } = require("../utils/GolbalConst");
const axios = reqire("axios");

const fromApi = async (name) => {
  try {
    let responseApi = await axios(URL_API_POKEMON_ID_OR_NAME + name);
    let pkFound = {
      id: responseApi.data.id,
      name: responseApi.data.name,
      life: responseApi.data.stats[0].base_stat,
      attack: responseApi.data.stats[1].base_stat,
      defense: responseApi.data.stats[2].base_stat,
      speed: responseApi.data.stats[5].base_stat,
      height: responseApi.data.height,
      weight: responseApi.data.weight,
      image: responseApi.data.sprites.front_default,
      Types: responseApi.data.types.map((type) => type.type.name),
    };
    return pkFound;
  } catch (error) {
    return `No Pokemon Found Whit Name ${name} In API`;
  }
};

const fromDb = async (name) => {
  try {
    let responseDb = await Pokemon.FindOne({
      where: { name: name },
      include: [Type],
    });
    if (!responseDb)
      throw new Error(`No Pokemon Found With Name ${name} In DB`);
    return responseDb;
  } catch (error) {
    return error.message;
  }
};

const getByName = async (name) => {
  try {
    let pkFromApi = await fromApi(name);
    let pkFromDb = await fromDb(name);
    let allFoundPk = [pkFromApi, pkFromDb];

    return allFoundPk;
  } catch (error) {
    return error.message;
  }
};

module.exports = getByName;
