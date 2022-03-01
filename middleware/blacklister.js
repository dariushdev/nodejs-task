const config = require('../config/config');
const ipconverter = require('../helpers/ipconverter');

// Middleware that checks if IP is blacklisted.
exports.checkAllowedIp = async (req, res, next) => {
  const requestIp = req.connection.remoteAddress;

  if (config.ALLOWED_IP.indexOf(ipconverter.convertIp(requestIp)) >= 0) {
    next();
  } else {
    res.status(403).json({'error': 'Your IP is not allowed to use this API.'});
  }
};
