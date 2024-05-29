'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Venues', [
      {
        user_id: 1,
        name: 'PVR Cinemas',
        address: '123 Main St',
        city: 'Mumbai',
        state: 'MH',
        zipcode: '400001',
        capacity: 250,
        created_at: new Date(),
      },
      {
        user_id: 2,
        name: 'INOX',
        address: '456 Market St',
        city: 'Delhi',
        state: 'DL',
        zipcode: '110001',
        capacity: 300,
        created_at: new Date(),
      },
      {
        user_id: 3,
        name: 'Cinepolis',
        address: '789 Broadway',
        city: 'Bangalore',
        state: 'KA',
        zipcode: '560001',
        capacity: 200,
        created_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Venues', null, {});
  }
};
