const router = require('express').Router();
const { addStartup } = require('../controllers/Startup.controller');

router.post('/add', addStartup);
