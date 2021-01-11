const { db } = require('./db');
const { Photo } = require('./models/Photo');
const { User } = require('./models/User');

// model associations
Photo.belongsTo(User);
User.hasMany(Photo);

module.exports = { db, Photo, User };
