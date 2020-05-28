const Moons = (connection, Sequelize, Months) => connection.define('Moons', {
  id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false, },
  monthId: { type: Sequelize.STRING, allowNull: false, references: { model: Months, primaryKey: 'id' } },
}, { paranoid: true })

module.exports = Moons

