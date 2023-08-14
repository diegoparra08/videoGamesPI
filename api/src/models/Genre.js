const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('genre', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
        },
        name:{
            type:DataTypes.STRING(20),
            allowNull: false,
        }
    }, { timestamps: false })
}