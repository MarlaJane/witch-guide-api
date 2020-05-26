const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const monthsModel = require('./months')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const {
  username, password, database, host, dialect,
} = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect })


const Months = monthsModel(connection, Sequelize)

module.exports = {
  Months,
  Sequelize,
}
