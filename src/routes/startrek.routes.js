const express = require('express');
const router = express.Router();
const startrekController = require('../controllers/startrek.controller');

router.get('/', startrekController.getHomePage);
router.get('/shows', startrekController.getShows);
router.get('/shows/:id', startrekController.getShowById);

module.exports = router;