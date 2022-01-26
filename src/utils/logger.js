/* eslint-disable no-console */
const info = (...params) => {
  console.log(...params);
};

const error = (...params) => {
  console.error(...params);
};

const requestLogger = (request, response, next) => {
  info('Method:', request.method);
  info('Path:  ', request.path);
  info('Body:  ', request.body);
  info('---');
  next();
};

module.exports = {
  info,
  error,
  requestLogger,
};
