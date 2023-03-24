const getAll = require("../controllers/getAll");
const getById = require("../controllers/getById");
const postPk = require("../controllers/postPk");
const getByName = require("../controllers/getByName")

const getPksHandler = async (req, res) => {
  try {
    const { name } = req.query;
    let allPokemons;

    if (name) allPokemons = await getByName(name);
    else allPokemons = await getAll();

    if (!allPokemons) throw new Error('Error loading Pokemons');
    if (allPokemons.error) throw new Error(`Error when obtaining Pokemon: ${allPokemons.error}`);

    return res.status(200).json(allPokemons);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const getPkHandler = async (req, res) => {
  try {
    const pk = await getById(req.params.id);

    if (!pk) throw new Error("Error when obtaining Pokemon by ID");
    if (pk.error) throw new Error(`Error by ID: ${pk.error}`);

    return res.status(200).json(pk);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const createPkHandler = async (req, res) => {
  try {
    const pkToPost = await postPk(req.body);

    if (pkToPost.error) throw new Error(pkToPost.error);

    const allPk = await getAll(); // Llama a la función getAll para obtener la lista actualizada de pokemones

    return res.status(200).json(allPk);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = {
  getPksHandler,
  getPkHandler,
  createPkHandler,
};
