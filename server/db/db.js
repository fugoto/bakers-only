const Sequelize = require('sequelize');

const databaseUrl = process.env.DATABASE_URL || 'postgres:localhost:5432/bakers-only';

const db = new Sequelize(databaseUrl, {
  logging: false,
  operatorsAliases: false,
// the below needs to be included for deployment; comment out in production mode
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
});

module.exports = db;
