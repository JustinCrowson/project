const User = require('./User');
const hang = require('./hang');
const nic = require('./nic');
const snk = require('./snk');

//! help


  nic.belongsTo(User, {
    foreignKey: 'user_id',
  });

  hang.belongsTo(User, {
    foreignKey: 'user_id',
  });

  snk.belongsTo(User, {
    foreignKey: 'user_id',
  });


module.exports = { User, hang, nic, snk };
