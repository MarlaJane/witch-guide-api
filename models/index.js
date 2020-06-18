const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const monthsModel = require('./months')
const moonsModel = require('./moons')
const activitiesModel = require('./activities')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Months = monthsModel(connection, Sequelize)

const Moons = moonsModel(connection, Sequelize, Months)

const Activities = activitiesModel(connection, Sequelize, Months)

// Months.hasMany(Moons)
// Months.hasMany(Activities)
// Moons.belongsTo(Months)
// Activities.belongsTo(Months)

module.exports = {
  Months,
  Moons,
  Activities,
  Sequelize,
}
