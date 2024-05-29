'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Event', [
      {
        venue_id: 1,
        user_id: 1,
        name: 'Avengers: Endgame Screening',
        description: 'Special screening of Avengers: Endgame',
        created_at: new Date(),
      },
      {
        venue_id: 2,
        user_id: 2,
        name: 'Star Wars Marathon',
        description: 'All-day screening of Star Wars movies',
        created_at: new Date(),
      },
      {
        venue_id: 3,
        user_id: 3,
        name: 'Inception Special Viewing',
        description: 'Inception with director commentary',
        created_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {});
  }
};
