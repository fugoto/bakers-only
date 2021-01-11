const Sequelize = require('sequelize');

const { db } = require('../db');

const { STRING } = Sequelize;

const Photo = db.define('photo', {
  imageUrl: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  title: {
    type: STRING,
  },
});

module.exports = { Photo };
