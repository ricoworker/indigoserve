module.exports = (sequelize, Sequelize) => {
  const educationBackground = sequelize.define(
    'education_background',
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
    }
  );
};
