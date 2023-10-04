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
};
