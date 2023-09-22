module.exports = (sequelize, Sequelize) => {
  const Founders = sequelize.define('founders', {
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
    id_company: {
      type: Sequelize.INTEGER,
    },
  });
};
