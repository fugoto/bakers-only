const Sequelize = require('sequelize');

const databaseUrl = process.env.DATABASE_URL || 'postgres:localhost:5432/bakers-only';

const db = new Sequelize(databaseUrl, {
  logging: false,
  operatorsAliases: false,
});

module.exports = db;
