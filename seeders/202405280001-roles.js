'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Role', [
      { name: 'admin', description: 'Administrator', created_at: new Date() },
      { name: 'customer', description: 'Customer', created_at: new Date() },
      { name: 'cinema', description: 'Cinema', created_at: new Date() },
      { name: 'event organizer', description: 'Event Organizer', created_at: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Role', null, {});
  }
};
