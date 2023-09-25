module.exports = (sequelize, Sequelize) => {
  const startup_games = sequelize.define('startup_games', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    alpha: {
      type: Sequelize.INTEGER,
    },
    beta: {
      type: Sequelize.INTEGER,
    },
    gold: {
      type: Sequelize.INTEGER,
    },
  });

  return startup_games;
};
