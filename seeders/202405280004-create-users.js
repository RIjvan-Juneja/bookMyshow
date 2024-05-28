'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        role_id: 1,
        first_name: 'Rijvan',
        last_name: 'Doe',
        gender: 'Male',
        email: 'Rijvan.doe@example.com',
        mobile_number: '1234567890',
        salt: 'randomsalt1',
        password_hash: 'hashedpassword1',
        address: '123 Main St',
        zipcode: 12345,
        state: 'State1',
        city: 'City1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        role_id: 2,
        first_name: 'Juneja',
        last_name: 'Hemakshi',
        gender: 'Female',
        email: 'Juneja.Hemakshi@example.com',
        mobile_number: '0987654321',
        salt: 'randomsalt2',
        password_hash: 'hashedpassword2',
        address: '456 Another St',
        zipcode: 67890,
        state: 'State2',
        city: 'City2',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        role_id: 3,
        first_name: 'Rijvan',
        last_name: 'Hemakshi',
        gender: 'Male',
        email: 'Rijvan.Hemakshi@example.com',
        mobile_number: '1122334455',
        salt: 'randomsalt3',
        password_hash: 'hashedpassword3',
        address: '789 Different St Bhavanagr',
        zipcode: 11223,
        state: 'State3',
        city: 'City3',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
