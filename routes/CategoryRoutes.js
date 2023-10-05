const Router = require('express').Router();
const {
  AddCategory,
  GetAllCategory,
  DeleteCategorybyId,
  EditCategorybyId,
} = require('../controllers/Category.controller');

Router.post('/add', AddCategory);
Router.get('/all', GetAllCategory);
Router.delete('/delete/:id', DeleteCategorybyId);
Router.put('/edit/:id', EditCategorybyId);

module.exports = Router;
