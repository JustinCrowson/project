const { hang } = require('../models');

const hangmanData = [
    {
        score: 7
    },
    {
        score: 3
    },
    {
        score: 3
    },
    {
        score: 3
    },
    {
        score: 3
    },
    {
        score: 3
    },
    {
        score: 3
    },
    {
        score: 3
    }
]

const seedHangman = () => hang.bulkCreate(hangmanData);

module.exports = seedHangman