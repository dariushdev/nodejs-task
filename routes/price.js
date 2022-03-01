const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const pricecontroller = require('../controllers/pricecontroller');
const validator = require('../middleware/validator');
const blacklister = require('../middleware/blacklister');

// GET route with validation and IP blacklisting middlewares.
router.get('/getPriceHistory/:startDate/:endDate',
    validator.validateParams,
    blacklister.checkAllowedIp,
    pricecontroller.getPriceHistory);

module.exports = router;
