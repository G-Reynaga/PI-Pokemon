const { Pokemon, Type } = require("../db");
const { URL_API_POKEMON_ID_OR_NAME } = require("../utils/GolbalConst");
const axios = require("axios");

const getById = async (id) => {
  // 1008 es el ult pokemon, lo demas son de la DB (aún siendo UUID)
  try {
    if (id <= 1008) {
      let response = await axios(URL_API_POKEMON_ID_OR_NAME + id);
      let data = response.data;
      let pkFound = {
        id: data.id,
        name: data.name,
        life: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        image: data.sprites.other["official-artwork"]["front_default"],
        Types: data.types.map((element) => element.type.name).join(" "),
      };
      return pkFound;
    } else {
      const pokemon = await Pokemon.findByPk(id, {
        include: [
          {
            model: Type,
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });
      if (!pokemon) throw new Error("No Pokemon exists with this ID");
      let cleanPk = {
        ...pokemon.toJSON(),
        Types: pokemon.Types.map((type) => type.name + " "),
      };
      return cleanPk;
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = getById;
