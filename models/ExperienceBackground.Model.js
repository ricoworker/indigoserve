module.exports = (sequelize, Sequelize) => {
  const experienceBackground = sequelize.define(
    'experience_background',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      start_date: {
        type: Sequelize.DATE,
      },
      finish_date: {
        type: Sequelize.DATE,
      },
      startup: {
        type: Sequelize.TEXT,
      },
      position: {
        type: Sequelize.TEXT,
      },
      id_founder: {
        type: Sequelize.INTEGER,
      },
    }
  );

  return experienceBackground
};
