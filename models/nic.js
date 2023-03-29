const sequelize = require("../config/connection");
const { Model, DataTypes } = require('sequelize');

class NicTacToe extends Model {} 

NicTacToe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        wins: {
          type: DataTypes.INTEGER,

        },

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'nictactoe',
      }
    );
module.exports = NicTacToe;