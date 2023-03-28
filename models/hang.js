const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hangman extends Model {}

Hangman.init(
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
        modelName: 'Hangman',
      }
    );
module.exports = Hangman;