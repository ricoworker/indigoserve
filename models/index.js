const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.startup = require('./Startups.Model')(sequelize, Sequelize);
db.categories = require('./Categories.Model')(sequelize, Sequelize);
db.contract = require('./Contract.model')(sequelize, Sequelize);
db.educationbg = require('./EducationsBackground.Model')(
  sequelize,
  Sequelize
);
db.experiencebg = require('./ExperienceBackground.Model')(
  sequelize,
  Sequelize
);
db.financial = require('./Financial.Model')(sequelize, Sequelize);
db.founders = require('./Founders.Model')(sequelize, Sequelize);
db.jenisstartup = require('./JenisStartups.Model')(
  sequelize,
  Sequelize
);
db.peformance = require('./Peformance.Model')(sequelize, Sequelize);
db.startupgame = require('./StartupGame.Model')(sequelize, Sequelize);
db.synergi = require('./Synergi.Model')(sequelize, Sequelize);
db.vcinvestor = require('./VcInvestor.Model')(sequelize, Sequelize);

// db.products.belongsTo(db.category, {
//   foreignKey: 'category',
//   as: 'category makanan',
// });

db.startup.belongsTo(db.categories, {
  foreignKey: 'id_category',
  as: 'category',
});

db.categories.hasMany(db.startup, {
  foreignKey: 'id_category',
  as: 'list_startup',
});

module.exports = db;
