const sequelize = require("../config/connection");
const { Model, DataTypes } = require('sequelize');

class Snake extends Model {} 

Snake.init(
    {
        snake_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        snake_score: {
            type: DataTypes.INTEGER,
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