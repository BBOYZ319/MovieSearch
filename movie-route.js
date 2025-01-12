const express = require('express');
const router = express.Router();
const movieController = require('../controllers/user-controller');

router.get('/popular-movies', movieController.getPopularMovies);

module.exports = router;