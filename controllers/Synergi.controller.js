const db = require('../models');
const Synergis = db.synergi;

module.exports = {
  getAllSynergis: async (req, res) => {
    try {
      const allSynergis = await Synergis.findAll();
      res.status(200).json(allSynergis);
    } catch (error) {
      console.log(error);
    }
  },
  addSynergi: async (req, res) => {
    try {
      const body = req.body;
      const newSynergi = await Synergis.create(body);
      res.status(200).json(newSynergi);
    } catch (error) {
      console.log(error);
    }
  },
};
