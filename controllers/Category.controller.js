const db = require('../models');
const Category = db.categories;

module.exports = {
  AddCategory: async (req, res) => {
    try {
      const body = req.body;
      const NewCategory = await Category.create(body);
      res.status(200).json(NewCategory);
    } catch (error) {
      console.log(error);
    }
  },
  GetAllCategory: async (req, res) => {
    try {
      const allCategories = await Category.findAll({
        include: ['list_startup'],
      });
      res.status(200).json(allCategories);
    } catch (error) {}
  },
  DeleteCategorybyId: async (req, res) => {
    try {
      const { id } = req.params;
      const deleteCategory = await Category.destroy({
        where: { id: id },
      });

      if (deleteCategory) {
        const allCategories = await Category.findAll({
          include: ['list_startup'],
        });
     
        res.status(200).json(allCategories);
      } else res.send('id kategori tidak ditemukan');
    } catch (error) {
      console.log(error);
    }
  },
};
