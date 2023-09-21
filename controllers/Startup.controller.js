const db = require('../models');
const Startup = db.startup;

module.exports = {
  addStartup: async (req, res) => {
    try {
      const { startup_name, description } = req.body;
      console.log(startup_name, 'body startup');
      const newStartup = await Startup.create({
        startup_name: startup_name,
        description: description,
      });
      res.status(200).json(newStartup);
    } catch (error) {
      console.log(error, 'error add startup');
    }
  },
};
