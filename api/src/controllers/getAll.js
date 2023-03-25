const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { URL_API_POKEMON } = require("../utils/GolbalConst");

const getAllApi = async () => {
  try {
    const promises = [];
    let url = URL_API_POKEMON;
    //me permite obtener los pokemons de la pokeapi
    const { data } = await axios.get(`${url}?limit=251&offset=0`);
    promises.push(...data.results);
    url = data.next;

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
    //trae los pokemones, que incluyan el nombre del type (tipo join)
    pkDb = await Pokemon.findAll({
      include: [
        {
          model: Type,
          attributes: ["name"],
          through: { attributes: [] },
          as: "types",
        },
      ],
    });
    if (!pkDb.length) {
      return [];
    }

    let foundPkDb = pkDb.map((pokemon) => ({
      ...pokemon.toJSON(),
      Types: pokemon.types.map((type) => type.name).join(" "),
    }));
    return foundPkDb;
  } catch (error) {
    return error.message;
  }
};

//me permite unir el array que me devuelve la pokeapi pokemons + los pokemons creados en la DB
const getAll = async () => {
  try {
    let pkFromDb = await getAllDb();

    if (!pkFromDb.length) {
      // throw new Error("No Pokemons Found in Database");
      pkFromDb = [];
    }

    let pkFromApi = await getAllApi();
    
    let allPk = pkFromDb.concat(pkFromApi);

    if (!allPk.length) {
      throw new Error("No Pokemons Found");
    }

    return allPk;
  } catch (error) {
    return error.message;
  }
};
module.exports = getAll;
