const Activities = (connection, Sequelize, Moons, Months) => connection.define('activities', {
  id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  moonId: { type: Sequelize.INTEGER, references: { model: Moons, primaryKey: 'id' } },
  monthId: { type: Sequelize.INTEGER, references: { model: Months, primaryKey: 'id' } },
}, { paranoid: true })


module.exports = Activities

