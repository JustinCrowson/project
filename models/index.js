const User = require('./User');
const hang = require('./hang');
const nic = require('./nic');
const snk = require('./snk');

//! help
Gallery.hasMany(Painting, {
    foreignKey: 'gallery_id',
  });
  
  Painting.belongsTo(Gallery, {
    foreignKey: 'gallery_id',
  });


module.exports = { User, hang, nic, snk };
