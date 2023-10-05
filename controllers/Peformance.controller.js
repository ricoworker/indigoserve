const db = require('../models');
const Peformance = db.peformance;

module.exports = {
  AddPeformance: async (req, res) => {
    try {
      const body = req.body;
      const NewPeformance = await Peformance.create(body);
      res.status(200).json(NewPeformance);
    } catch (error) {
      console.log(error);
    }
  },

  DeletePeformancebyId: async (req, res) => {
    const id = req.params;
    try {
      const deletePeformance = await Peformance.destroy({
        where: {
          id: id,
        },
      });

      if (deletePeformance) {
        const allPeformance = await Peformance.findall();
        res.status(200).json(allPeformance);
      }
      res.status(404).json('Id tidak ditemukan');
    } catch (error) {
      console.log(error);
    }
  },
  EditPeformancebyId: async (req, res) => {
    const id = req.params;
    try {
      const body = req.body;
      const editedPeformance = await Peformance.update(body, {
        where: {
          id: id,
        },
      });

      if (editedPeformance[0] > 0) {
        const allPeformance = Peformance.findAll({
          where: {
            id: id,
          },
        });
        res.status(200).json(allPeformance);
      }
      res.status(404).json('id tidak ditemukan');
    } catch (error) {
      console.log(error);
    }
  },
};
