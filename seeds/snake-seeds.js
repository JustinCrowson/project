const { snk } = require('../models');

const snakeData = [
    {
        snake_score: 3
    },
    {
        snake_score: 7
    },
    {
        snake_score: 3
    },
    {
        snake_score: 3
    },
    {
        snake_score: 3
    },
    {
        snake_score: 3
    },
    {
        snake_score: 3
    },
    {
        snake_score: 3
    }
]

const seedSnake = () => snk.bulkCreate(snakeData);

module.exports = seedSnake;