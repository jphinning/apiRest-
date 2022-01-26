const app = require('./app');
const { PORT } = require('./utils/config');
const logger = require('./utils/logger');

logger.info(`Running in PORT ${PORT}`);

app.listen(PORT);
