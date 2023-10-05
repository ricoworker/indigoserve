module.exports = (sequelize, Sequelize) => {
  const Startups = sequelize.define('startups', {
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
      allowNull: false,
    },
    website: {
      type: Sequelize.STRING,
    },
    pitchdeck: {
      type: Sequelize.STRING,
    },
    tahun_intake: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    jenis_intake: {
      type: Sequelize.STRING,
    },
    id_category: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_jenisStartup: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    startup_profile: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: false,
    },
  });

  return Startups;
};
