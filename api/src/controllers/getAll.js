const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { URL_API_POKEMON } = require("../utils/GolbalConst");

const getAllApi = async () => {
  try {
    const promises = [];
    // while (promises.length < 160) {}
    let url = URL_API_POKEMON;
    const { data } = await axios.get(`${url}?limit=151&offset=0`);
    promises.push(...data.results);
    // url = data.next;

    const resultPromises = await Promise.all(
      promises.map(async (promise) => {
        const res = await axios.get(promise.url);
        return res.data;
      })
    );
    const pkFromApi = resultPromises.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        life: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        image: pokemon.sprites.other["official-artwork"]["front_default"],
        Types: pokemon.types.map((element) => element.type.name).join(" "),
      };
    });
    return pkFromApi;
  } catch (error) {
    return error.message;
  }
};

const getAllDb = async () => {
  try {
    let pkDb = [];
    pkDb = await Pokemon.findAll({
      includes: [
        {
          model: Type,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });
    if (!pkDb.length) {
      return [];
    }
    let cleanPkDb = pkDb.map((pokemon) => ({
      ...pokemon.toJSON(),
      Type: pokemon.Types.map((type) => type.name + " "),
    }));
    return cleanPkDb;
  } catch (error) {
    return error.message;
  }
};

const getAll = async () => {
  try {
    let pkFromApi = await getAllApi();
    let pkFromDb = await getAllDb();
    let allPk = pkFromApi.concat(pkFromDb);
    if (!allPk.length) throw new Error("No Pokemons Found");
    return allPk;
  } catch (error) {
    return error.message;
  }
};
module.exports = getAll;
