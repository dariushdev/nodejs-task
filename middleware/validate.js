const { param, validationResult } = require('express-validator')

exports.validateParams = [
        param('startDate')
        .exists()
        .isDate('YYYY-MM-DD')
        .isBefore(new Date().toISOString().slice(0, 10)),
        param('endDate')
        .exists()
        .isDate('YYYY-MM-DD'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({errors: errors.array()});
            }
            next();
        },
];