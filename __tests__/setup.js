const mongoose = require('mongoose');
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

beforeAll((done) => mongoose.connect(process.env.DB, {
  useNewUrlParser: true, useUnifiedTopology: true,
}, done));
afterAll((done) => mongoose.connection.dropDatabase(done));
