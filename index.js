// TODO: Require needed node modules
const express = require('express');

// Declare an app variable
const app = express();

// TODO: Connect to Mongo database

// TODO: Middleware, etc

// Declare controllers
app.use('/museums', require('./controllers/museums'));
app.use('/pieces', require('./controllers/pieces'));

// Make home route
app.get('/', (req, res) => {
  res.send('STUB - HOME');
});

// TODO: Listen
app.listen(3000);

