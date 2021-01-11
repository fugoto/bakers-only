const Sequelize = require("sequelize") 

const { db } = require('../db')
const { STRING } = Sequelize

const User = db.define('user', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

module.exports = { User }