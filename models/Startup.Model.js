module.exports = (sequelize, Sequelize) => {
  const Startup = sequelize.define('startup', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    startup_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },
    website: {
      type: Sequelize.STRING,
    },
    pitchdeck: {
      type: Sequelize.STRING,
    },
    tahun_intake: {
      type: Sequelize.DATE,
    },
    status: {
      type: Sequelize.STRING,
    },
    jenis_intake: {
      type: Sequelize.STRING,
    },
    id_category: {
      type: Sequelize.INTEGER,
    },
    id_jenisStartup: {
      type: Sequelize.INTEGER,
    },
    id_contract: {
      type: Sequelize.INTEGER,
    },
    id_financial: {
      type: Sequelize.INTEGER,
    },
  });

  return Startup;
};
