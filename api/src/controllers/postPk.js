const { Pokemon, Type } = require("../db");

const postPk = async (pokemon) => {
  try {
    const { name, life, attack, defense, speed, height, weight, image, Types } =
      pokemon;
    if (!name || !life || !attack || !defense || !image || !Types)
      throw new Error("Missing Information");
    const newPk = await Pokemon.create({
      name,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      image,
    });
    const [newType] = await Type.findOrCreate({
      where: { name: Types },
    });
    await newPk.addType(newType);
    return newPk;
  } catch (error) {
    return error.message;
  }
};

module.exports = postPk;
