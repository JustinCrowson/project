const { Snake } = require('../models');

const snakeData = [
    {
        snake_score: 3
    },
    {
        snake_score: 7
    },
    {
        snake_score: 12
    },
    {
        snake_score: 68
    },
    {
        snake_score: 53
    }
]

const seedSnake = () => Snake.bulkCreate(snakeData);

module.exports = seedSnake;