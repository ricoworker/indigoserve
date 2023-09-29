const Router = require('express').Router();
const {
  addStartup,
  getAllStartups,
  deleteStartupbyId
} = require('../controllers/Startup.controller');

Router.post('/add', addStartup);
Router.get('/all', getAllStartups);
Router.delete('/delete/:id', deleteStartupbyId);

module.exports = Router;
