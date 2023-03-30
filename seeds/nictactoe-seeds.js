const { nic } = require('../models');

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

const seedNicTacToe = () => nic.bulkCreate(nicData);

module.exports = seedNicTacToe;