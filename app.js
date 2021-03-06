const express = require('express');
const router = require('./appRoutes');
const config = require('./config/config');
const logger = require('./log/logger');

const app = express();
app.use('/', router);

const port = process.env.port || config.port;
app.listen(port);
logger.log('info',"Server is up listenning on port 8080");