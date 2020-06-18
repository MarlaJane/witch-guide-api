const Activities = (connection, Sequelize, Months) => connection.define('activities', {
  id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false, },
  monthId: { type: Sequelize.INTEGER, references: { model: Months, primaryKey: 'id' } },
}, { paranoid: true })


module.exports = Activities

