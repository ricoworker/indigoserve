module.exports = (sequelize, Sequelize) => {
  const jenisStartups = sequelize.define('jenis_startups', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return jenisStartups;
};
