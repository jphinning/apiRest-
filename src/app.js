const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Custom Middleware
const { MONGODB_URI } = require('./utils/config');
const logger = require('./utils/logger');
const { errorHandler, unknownEndpoint } = require('./utils/errorHandler');

const app = express();

// Connecting to the database
mongoose.connect(MONGODB_URI);

// Basic middleware
app.use(cors());
app.use(express.json());

// Custom Middleware
app.use(logger.requestLogger);

/*
Importing Routes and their respective controllers
The require is importing a function and running it with
our express instance as a parameter
*/
require('./routes/indexRoutes')(app);

// Custom Middleware -> Error Handling after bad request
app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
