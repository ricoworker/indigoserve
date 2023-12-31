module.exports = (sequelize, Sequelize) => {
  const founders = sequelize.define('founders', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    contract: {
      type: Sequelize.INTEGER,
    },
    komitmen: {
      type: Sequelize.TEXT,
    },
    id_startup: {
      type: Sequelize.INTEGER,
    },
  });

  return founders
};
