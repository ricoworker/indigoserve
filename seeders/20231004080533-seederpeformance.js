'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('synergis',[
{
  telkom : "ini telkom",
  entity:'ini entity',
  model:'ini model',
  lead_time:22,
  output:'ini output',
  confidence_level:'ini cofidence level',
  project_status:'project status',
  initial_date:'12-06-2022',
  description:'ini deskripsi dari seeding',
  id_startups:3
}
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
