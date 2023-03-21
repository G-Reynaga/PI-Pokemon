const { Router } = require("express");
const getAll = require("../controllers/getAll");
const getAllTypes = require("../controllers/getAllTypes");
const getById = require("../controllers/getById");
const postPk = require("../controllers/postPk");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons", async (req, res) => {
  try {
    const { name } = req.query;
    let allPokemons;

    if (name) allPokemons = await getByName(name);
    else allPokemons = await getAll();

    if (allPokemons.error) throw new Error(allPokemons.error);
    return res.status(200).json(allPokemons);
    
  } catch (error) {
    return res.status(404).send(error);
  }
});

router.get("/pokemon/:id", async (req, res) => {
  try {
    const pk = await getById(req.params.id);

    if (pk.error) throw new Error(pk.error);
    return res.status(200).json(pk);

  } catch (error) {
    return res.status(404).send(error);
  }
});

router.get('/types', async (req, res) => {
    try {
        const allTypes = await getAllTypes();

        if(allTypes.error) throw new Error(allTypes.error)
        return res.status(200).json(allTypes)

    } catch (error) {
        return res.status(404).send(error)
    }
})

router.post("/pokemon", async (req, res) => {
  try {
    const pkToPost = await postPk(req.body);

    if (pkToPost.error) throw new Error(pkToPost.error);

    const allPk = await getAll(); // Llama a la función getAll para obtener la lista actualizada de pokemones

    return res.status(200).json(allPk);
  } catch (error) {
    return res.status(404).send(error);
  }
});

module.exports = router;
