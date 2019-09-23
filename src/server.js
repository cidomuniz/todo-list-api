require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
const mongoose = require('mongoose');
const morgan = require('morgan');
require('./app/models/TaskModel');
const apiMetrics = require('prometheus-api-metrics');

// Iniciando o DB

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });

// Iniciando o App

const app = require('./app');

// Api metrics
app.use(apiMetrics());

// Error Handler
app.use(morgan('dev'));

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});
app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(process.env.PORT, process.env.HOST);
