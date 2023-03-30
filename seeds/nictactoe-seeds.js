const { nic } = require('../models');

const nicData = [
    {
        wins: 0
    },
    {
        wins: 0
    },
    {
        wins: 3
    },
    {
        wins: 3
    },
    {
        wins: 3
    },
    {
        wins: 3
    },
    {
        wins: 3
    },
    {
        wins: 3
    }
]

const seedNicTacToe = () => nic.bulkCreate(nicData);

module.exports = seedNicTacToe;