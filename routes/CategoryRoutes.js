const Router = require('express').Router();
const { AddCategory,GetAllCategory } = require('../controllers/Category.controller');

Router.post('/add', AddCategory);
Router.get('/all', GetAllCategory);

module.exports = Router;
