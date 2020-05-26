const months = (connection, Sequelize) => {
  return connection.define('Months', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    moon: { type: Sequelize.STRING },
    activities: { type: Sequelize.STRING },
    slug: { type: Sequelize.STRING },
  }, { paranoid: true })
}

module.exports = months

