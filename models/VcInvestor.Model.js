module.exports = (sequelize, Sequelize) => {
  const vc_investors = sequelize.define('vc_investors', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    contacts: {
      type: Sequelize.TEXT,
    },
    appelte: {
      type: Sequelize.TEXT,
    },
    instrument_type: {
      type: Sequelize.TEXT,
    },
    instrument_stage: {
      type: Sequelize.TEXT,
    },
    investor_clasification: {
      type: Sequelize.TEXT,
    },
    investment_syndication: {
      type: Sequelize.TEXT,
    },
    focused_sector: {
      type: Sequelize.TEXT,
    },
    ticket_size: {
      type: Sequelize.TEXT,
    },
    remarks: {
      type: Sequelize.TEXT,
    },
    link_logo: {
      type: Sequelize.TEXT,
    },
  });
  return vc_investors
};
