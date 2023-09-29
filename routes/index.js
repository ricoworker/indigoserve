const Route = require('express').Router();
const Startup = require('./StartupRoutes');
const Categories = require('./CategoryRoutes');

Route.use('/startup', Startup);
Route.use('/category', Categories);

module.exports = Route;
