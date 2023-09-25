module.exports = (sequelize, Sequelize) => {
  const contracts = sequelize.define('contracts', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    no_pks: {
      type: Sequelize.TEXT,
    },
    total_founding: {
      type: Sequelize.BIGINT,
    },
    cn: {
      type: Sequelize.INTEGER,
    },
    umur_cn: {
      type: Sequelize.INTEGER,
    },
  });

  return contracts
};
