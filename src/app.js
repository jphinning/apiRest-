const express = require('express');
const cors = require('cors');

const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

/*
Importing Routes and their respective controllers
The require is importing a function and running it with
our express instance as a parameter
*/
require('./routes/indexRoutes')(app);

module.exports = app;
