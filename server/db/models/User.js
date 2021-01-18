const Sequelize = require('sequelize');

const db = require('../db');

const { STRING } = Sequelize;

const User = db.define('user', {
  username: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  userEmail: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  hashedPassword: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
}, {
  defaultScope: {
    attributes: { exclude: ['hashedPassword'] },
  },
});

module.exports = User;
