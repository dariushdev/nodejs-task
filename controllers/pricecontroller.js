const datafetcher = require('../helpers/datafetcher');
const multiplication = require('../helpers/multiplication');

exports.getPriceHistory = (async (req, res) => {
  try {
    const data = await datafetcher.fetchData(req.params.startDate,
        req.params.endDate);
    const multiplyData = multiplication.multiplyNumbers(data);
    res.status(200).json(multiplyData);
  } catch (e) {
    console.log(e);
    res.status(500).json({'error': 'something went wrong'});
  }
});
