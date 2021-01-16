const db = require('./db');
const Photo = require('./models/Photo');
const User = require('./models/User');
const Session = require('./models/Session');

// model associations
Photo.belongsTo(User);
User.hasMany(Photo);
Session.belongsTo(User);
User.hasOne(Session);

module.exports = {
  db, Photo, User, Session,
};
