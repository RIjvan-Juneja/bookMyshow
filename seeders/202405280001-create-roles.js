'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('roles', [
      { name: 'admin', description: 'Administrator', created_at: new Date() },
      { name: 'customer', description: 'Customer', created_at: new Date() },
      { name: 'cinema', description: 'Cinema', created_at: new Date() },
      { name: 'event organizer', description: 'Event Organizer', created_at: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
