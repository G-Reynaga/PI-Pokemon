const { getAllTypes, saveTypeDb } = require("../controllers/getAllTypes");
const { Type } = require("../db");

const getTypeHandler = async (req, res) => {
  try {
    const types = await getAllTypes();
    await saveTypeDb(types);

    const allTypes = await Type.findAll();

    if (allTypes.error) throw new Error(allTypes.error);

    return res.status(200).json(allTypes);
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = {
  getTypeHandler,
};
