const { NicTacToe } = require('../models');

const nicData = [
    {
        wins: 0
    },
    {
        wins: 0
    },
    {
        wins: 0
    },
    {
        wins: 0
    },
    {
        wins: 1
    }
]

const seedNicTacToe = () => NicTacToe.bulkCreate(nicData);

module.exports = seedNicTacToe;