const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mailingRouter = require('./src/routes/api/mailingRouter');
const { errorHandler } = require('./src/helpers/errorHandler');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
// Налаштування ліміту запитів (2 запити на 1 хвилину)
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 хвилина
  max: 4, // Максимальна кількість запитів за вказаний період часу (2 OPTIONS + 2 POST)
  message: 'Too many requests from this IP, please try again later.',
});

app.set('trust proxy', 1); 

app.use(logger(formatsLogger));
app.use(limiter);
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/contact-us', mailingRouter);

app.use(errorHandler);

module.exports = app;