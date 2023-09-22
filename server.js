const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = 5000;
dotenv.config();
const db = require('./models');
const Routes = require('./routes');
app.use(express.json());
app.use(Routes);

db.sequelize
  .sync()
  .then(() => {
    console.log('database terkoneksi & altered');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
  });

// db.sync

app.listen(port, () => console.log(`running on port: ${port}`));
