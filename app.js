const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mailingRouter = require('./src/routes/api/mailingRouter');
const { errorHandler } = require('./src/helpers/errorHandler');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/contact-us', mailingRouter);

app.use(errorHandler);

module.exports = app;