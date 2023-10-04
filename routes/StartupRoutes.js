const Router = require('express').Router();
const {
  addStartup,
  getAllStartups,
  deleteStartupbyId,
  editStartupbyId,
} = require('../controllers/Startup.controller');

const {
  AddPeformance,
} = require('../controllers/Peformance.controller');

Router.post('/add', addStartup);
Router.get('/all', getAllStartups);
Router.delete('/delete/:id', deleteStartupbyId);
Router.put('/update/:id', editStartupbyId);
Router.post('/peformance/add', AddPeformance);

module.exports = Router;
