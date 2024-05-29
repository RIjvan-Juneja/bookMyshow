'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permissions', [
      { api: '/addUser', created_at: new Date() },
      { api: '/fetchUsers', created_at: new Date() },
      { api: '/fetchUser/:id', created_at: new Date() },
      { api: '/updateUser/:id', created_at: new Date() },
      { api: '/addVanue', created_at: new Date() },
      { api: '/fetchVanues', created_at: new Date() },
      { api: '/updateVanue/:id', created_at: new Date() },
      { api: '/addEvent', created_at: new Date() },
      { api: '/updateEvent/:id', created_at: new Date() },
      { api: '/getAllMovies', created_at: new Date() },
      { api: '/cityWiseMovies', created_at: new Date() },
      { api: '/nowMovies', created_at: new Date() }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
