const { hang } = require('../models');

const hangmanData = [
    {
        score: 7
    },
    {
        score: 3
    },
    {
        score: 13
    },
    {
        score: 21
    }
]

const seedHangman = () => hang.bulkCreate(hangmanData);

module.exports = seedHangman