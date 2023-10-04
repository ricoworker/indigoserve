const Router = require('express').Router();
const {
  AddCategory,
  GetAllCategory,
  DeleteCategorybyId,
} = require('../controllers/Category.controller');

Router.post('/add', AddCategory);
Router.get('/all', GetAllCategory);
Router.delete('/delete/:id', DeleteCategorybyId);

module.exports = Router;
