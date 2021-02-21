const express = require('express');
const mongoose = require('mongoose');
const FakeDb = require('./fake-db');
const config = require('./config/dev');

const rentalRoutes = require('./routes/rentals');

mongoose.connect(config?.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
  }
);

const app = express();

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log("I am running");
});