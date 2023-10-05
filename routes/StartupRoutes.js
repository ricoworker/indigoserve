const Router = require('express').Router();
const {
  addStartup,
  getAllStartups,
  deleteStartupbyId,
  editStartupbyId,
} = require('../controllers/Startup.controller');
const {
  getAllSynergis,
  addSynergi,
} = require('../controllers/Synergi.controller');

const {
  AddPeformance,
  EditPeformancebyId,
} = require('../controllers/Peformance.controller');

Router.post('/add', addStartup);
Router.get('/all', getAllStartups);
Router.delete('/delete/:id', deleteStartupbyId);
Router.put('/update/:id', editStartupbyId);
Router.post('/peformance/add', AddPeformance);
Router.put('/peformance/:id', EditPeformancebyId);
Router.get('/synergis', getAllSynergis);
Router.post('/synergis/add', addSynergi);

module.exports = Router;
