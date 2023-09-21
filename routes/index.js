const Route = require('express').Router();
const { addStartup } = require('../controllers/Startup.controller');
Route.get('/', (req, res) => res.status(200).json('hallo'));
Route.post('/add', addStartup);

module.exports = Route;
