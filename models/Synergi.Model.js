module.exports = (sequelize, Sequelize) => {
  const synergi = sequelize.define('synergi', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    telkom: {
      type: Sequelize.TEXT,
    },
    entity: {
      type: Sequelize.TEXT,
    },
    model: {
      type: Sequelize.TEXT,
    },
    lead_time: {
      type: Sequelize.INTEGER,
    },
    output: {
      type: Sequelize.TEXT,
    },

    confidence_level: {
      type: Sequelize.TEXT,
    },
    project_status: {
      type: Sequelize.TEXT,
    },
    initial_date: {
      type: Sequelize.DATE,
    },
    description: {
      type: Sequelize.TEXT,
    },
    id_startups: {
      type: Sequelize.INTEGER,
      unique: true,
    },
  });
  return synergi;
};
