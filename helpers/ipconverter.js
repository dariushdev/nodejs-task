// convert from "::ffff:127.0.0.1" to "127.0.0.1"
exports.convertIp = (ip) => {
  if (!ip) {
    return '';
  }

  if (ip.substr(0, 7) === '::ffff:') {
    ip = ip.substr(7);
  }

  return ip;
};
