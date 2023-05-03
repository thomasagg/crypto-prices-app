const express = require('express');
const router = express.Router();
const coinsController = require('../controllers/coinsController');

router.get('/markets', coinsController.list);
router.get('/:id', coinsController.get);

module.exports = router;