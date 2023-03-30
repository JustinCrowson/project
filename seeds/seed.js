const sequelize = require('../config/connection');
const { User } = require('../models');
const seedSnake = require('./snake-seeds');
const seedHangman = require('./hangman-seeds');
const seedNicTacToe = require('./nictactoe-seeds');


const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedSnake();
  console.log('\n----- SNAKE SEEDED -----\n');

  await seedHangman();
  console.log('\n----- HANGMAN SEEDED -----\n');

  await seedNicTacToe();
  console.log('\n----- NICTACTOE SEEDED -----\n');

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  process.exit(0);


};

seedDatabase();
