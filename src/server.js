require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

// Iniciando o DB
const mongoose = require('mongoose');

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });

// Iniciando o App
const morgan = require('morgan');
require('./app/models/TaskModel');
const healthCheckEndpoint = require('health-check-endpoint');
const app = require('./app');

// HealthCheck
const responseHealthCheck = { version: 3 };

healthCheckEndpoint(app)(responseHealthCheck);

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
