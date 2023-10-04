'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('synergis', 'id_startups', {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    });
  },
};
