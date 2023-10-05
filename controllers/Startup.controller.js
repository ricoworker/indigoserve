const db = require('../models');
const Startup = db.startup;

module.exports = {
  addStartup: async (req, res) => {
    try {
      const body = req.body;
      console.log(body, 'body startup');
      const newStartup = await Startup.create(body);
      res.status(200).json(newStartup);
    } catch (error) {
      console.log(error, 'error add startup');
    }
  },

  getAllStartups: async (req, res) => {
    try {
      const allStartup = await Startup.findAll({
        include: ['category', 'peformance', 'synergi'],
      });
      res.status(200).json(allStartup);
    } catch (error) {
      console.log(error);
    }
  },

  deleteStartupbyId: async (req, res) => {
    try {
      const { id } = req.params;
      const deleteStartup = await Startup.destroy({
        where: { id: id },
      });

      if (deleteStartup) {
        const allStartups = await Startup.findAll({
          include: ['category', 'peformance', 'synergi'],
        });
        res.status(200).json(allStartups);
      } else res.send('id tidak ditemukan');
    } catch (error) {
      console.log(error);
    }
  },

  editStartupbyId: async (req, res) => {
    try {
      const body = req.body;
      const { id } = req.params;

      const editedStartups = await Startup.update(body, {
        where: {
          id: id,
        },
      });

      if (editedStartups[0] > 0) {
        const editedSuccess = await Startup.findOne({
          where: { id: id },
        });
        res.status(200).json(editedSuccess);
      } else {
        res.status(404).json('ID tidak ditemukan');
      }
    } catch (error) {
      console.log(error);
      res.status(500).json('Terjadi kesalahan server');
    }
  },
};
