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
      collage_school_name: {
        type: Sequelize.TEXT,
      },
      major: {
        type: Sequelize.TEXT,
      },
      title: {
        type: Sequelize.TEXT,
      },
      id_founder:{
        type:Sequelize.INTEGER
      }
    }
  );

  return educationBackground
};
