require('dotenv').config();

const { PORT } = process.env;
const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apirest.qckha.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

module.exports = {
  PORT,
  MONGODB_URI,
};
