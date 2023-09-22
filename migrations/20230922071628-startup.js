module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('startups', 'id_contract', {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      }),
      queryInterface.changeColumn('startups', 'id_financial', {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      }),
      queryInterface.changeColumn('startups', 'id_category', {
        type: Sequelize.INTEGER,
        allowNull: false,
      }),
      queryInterface.changeColumn('startups', 'id_jenisStartup', {
        type: Sequelize.INTEGER,
        allowNull: false,
      }),
    ]);
  },

  // down: (queryInterface) => {
  //   return Promise.all([
  //     queryInterface.changeColumn('startups', 'id_contract'),
  //   ]);
  // },
};
