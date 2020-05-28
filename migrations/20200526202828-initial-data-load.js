'use strict'

module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('months', [
      { name: 'January', slug: 'jan' },
      { name: 'February', slug: 'feb' },
      { name: 'March', slug: 'march' },
      { name: 'April', slug: 'april' },
      { name: 'May', slug: 'may' },
      { name: 'June', slug: 'june' },
      { name: 'July', slug: 'july' },
      { name: 'August', slug: 'aug' },
      { name: 'September', slug: 'sept' },
      { name: 'October', slug: 'oct' },
      { name: 'November', slug: 'nov' },
      { name: 'December', slug: 'dec' },
      { name: 'Situational', slug: 'misc' },
    ])

    await queryInterface.bulkInsert('moons', [
      { name: 'Wolf', monthId: 1 },
      { name: 'Storm', monthId: 2 },
      { name: 'Seed', monthId: 3 },
      { name: 'Pink', monthId: 4 },
      { name: 'Flower', monthId: 5 },
      { name: 'Honey', monthId: 6 },
      { name: 'Thunder', monthId: 7 },
      { name: 'Corn', monthId: 8 },
      { name: 'Harvest', monthId: 9 },
      { name: 'Hunters', monthId: 10 },
      { name: 'Snow', monthId: 11 },
      { name: 'Oak', monthId: 12 },
      { name: 'Blue', monthId: 13 },
    ])

    await queryInterface.bulkInsert('activities', [
      { name: 'animal stich witchery', monthId: 1, moonId: 1, },
      { name: 'candle craft', monthId: 2, moonId: 2, },
      { name: 'scrying with air', monthId: 3, moonId: 3, },
      { name: 'witches garden', monthId: 4, moonId: 4, },
      { name: 'faerie magic and friendships', monthId: 5, moonId: 5, },
      { name: 'scrying with fire', monthId: 6, moonId: 6, },
      { name: 'sea witchery', monthId: 7, moonId: 7, },
      { name: 'spellcasting icepops', monthId: 'August', moonId: 'Corn', },
      { name: 'scrying with water', monthId: 'September', moonId: 'Harvest', },
      { name: 'keys to crossroads', monthId: 'October', moonId: 'Hunters', },
      { name: 'words of power', monthId: 'November', moonId: 'Snow', },
      { name: 'scrying with earth', monthId: 'December', moonId: 'Oak', },
      { name: 'misc', monthId: 'Siuational', moonId: 'Blue', },
    ])
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    await queryInterface.bulkDelete('months')
    await queryInterface.bulkDelete('moons')

    return queryInterface.bulkDelete('activities')
  }
}

