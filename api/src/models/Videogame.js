const { DataTypes } = require('sequelize');
const validator = require('validator');

module.exports = (sequelize) => {
  
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.JSON),
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
      validate: {
        min:0.01,
        max: 5.00
      }
    }
  },
    { timestamps: false });
};
