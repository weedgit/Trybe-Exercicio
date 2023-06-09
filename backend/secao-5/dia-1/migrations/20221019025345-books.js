'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    id: Sequelize.INTEGER;
    title: Sequelize.STRING;
    author: Sequelize.STRING;
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('users');

  }
};
