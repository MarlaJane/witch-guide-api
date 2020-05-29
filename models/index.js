const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')
const monthsModel = require('./months')
const moonsModel = require('./moons')
const activitiesModel = require('./activities')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]

const connection = new Sequelize('witches', 'witches', 'w!tChp1e@$3', {
  host: 'localhost', dialect: 'mysql'
})

const Months = monthsModel(connection, Sequelize)

const Moons = moonsModel(connection, Sequelize, Months)

const Activities = activitiesModel(connection, Sequelize, Months, Moons)

Months.hasMany(Moons)
Months.hasMany(Activities)
Moons.belongsTo(Months)
Activities.belongsTo(Months)

module.exports = {
  Months,
  Moons,
  Activities,
  Sequelize,
}
