'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('startups', 'startup_profile', {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: false,
    });
  },
};
