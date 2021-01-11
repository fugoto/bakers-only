const { db } = require('./db')
const { Cat } = require('./models/Cat')
const { User } = require('./models/User')

// model associations
Cat.belongsTo(User)
User.hasMany(Cat)

module.exports = { db, Cat, User }