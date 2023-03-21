const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID, //para que me genere un Id unico(Una columna que almacena un identificador universal único. Úselo con UUIDV1 o UUIDV4 para valores predeterminados.)
        defaultValue: DataTypes.UUIDV4, //Un identificador universal único por defecto generado según la norma UUID v4
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      // Stats
      life: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        validate: { isUrl: true },
        defaultValue:
          "https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-0.png",
      },
    },
    { timestamps: false }
  );
};
