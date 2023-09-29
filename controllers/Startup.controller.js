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
        include: ['category'],
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
        res.send('tergapus');
      } else res.send('id tidak ditemukan');
    } catch (error) {
      console.log(error);
    }
  },
};
