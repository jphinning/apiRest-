const app = require('./app');
require('dotenv').config();

// eslint-disable-next-line no-console
console.log(`Running in PORT ${process.env.PORT}`);

app.listen(process.env.PORT || 3001);
