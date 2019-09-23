const mongoose = require('mongoose');
require('dotenv').config();

beforeAll((done) => mongoose.connect(process.env.DBTEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, done));
afterAll((done) => mongoose.connection.dropDatabase(done));