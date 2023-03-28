const sequelize = require("../config/connection");
const { Model, DataTypes } = require('sequelize');

class Snake extends Model {} 

Snake.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        score: {
            
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Snake',
      }
    );
module.exports = Snake;