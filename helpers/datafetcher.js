const config = require('../config/config');
const fetch = require('node-fetch');

// Fetch data from coindesk API.
exports.fetchData = (async (startDate, endDate) => {
  const url = config.API_URL + '?start=' + startDate + '&end=' + endDate;
  const res = await fetch(url);
  const data = await res.json();

  return data;
});
