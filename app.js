const express = require('express');
const app = express();
const port = 3000;

const price = require('./routes/price');

app.use('/api', price);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})