const Sequelize = require("sequelize")

const { db } = require('../db')
const { STRING } = Sequelize

const Cat = db.define('cat', {
    imageUrl: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    catName: {
        type: STRING
    }
})

module.exports = { Cat }