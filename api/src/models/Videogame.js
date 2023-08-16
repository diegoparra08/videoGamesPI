const { DataTypes } = require('sequelize');
const validator = require('validator');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isUrlValid(value) {
          if (value && !validator.isURL(value)) {
            throw new Error('It must be a valid URL')
          }
        }
      }
    },
    released: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: true,
    }
  },
    { timestamps: false });
};
