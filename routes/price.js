const express = require('express');
const router = express.Router();

const pricecontroller = require('../controllers/pricecontroller');
const validate = require('../middleware/validate');

router.get('/getPriceHistory/:startDate/:endDate',
            validate.validateParams,
            pricecontroller.getPriceHistory);

module.exports = router;