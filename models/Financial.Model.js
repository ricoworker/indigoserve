module.exports = (sequelize, Sequelize) => {
  const financials = sequelize.define('financials', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    revenue: {
      type: Sequelize.BIGINT,
    },
    nilai_valuasi: {
      type: Sequelize.BIGINT,
    },
    tahun: {
      type: Sequelize.INTEGER,
    },
  });
  return financials;
};
