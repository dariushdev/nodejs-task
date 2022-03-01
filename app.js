const express = require('express');
const config = require('./config/config');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 3000;

// Routes
const price = require('./routes/price');
app.use('/api', price);

// Compression
app.use(compression());

// Rate Limit config
const limiter = rateLimit({
  max: config.MAX_LIMIT,
  windowMs: config.MAX_LIMIT_TIME * 60 * 1000,
  message: 'Too many request from this IP',
});

app.use(limiter);

// Start expressJS
app.listen(port, () => {
  console.log(`ExpressJS listening on port ${port}`);
});
