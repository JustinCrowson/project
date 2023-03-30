const { Hangman } = require('../models');

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

const seedHangman = () => Hangman.bulkCreate(hangmanData);

module.exports = seedHangman