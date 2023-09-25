module.exports = (sequelize, Sequelize) => {
  const peformance = sequelize.define('peformance', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    peformance_update: {
      type: Sequelize.TEXT,
    },
    founders_and_team_update: {
      type: Sequelize.TEXT,
    },
    product_update: {
      type: Sequelize.TEXT,
    },
    action_paln: {
      type: Sequelize.TEXT,
    },
    tanggal_update: {
      type: Sequelize.DATE,
    },
   
  });

  return peformance
};
