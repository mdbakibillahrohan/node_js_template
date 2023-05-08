const express = require('express');
const appRouter = express.Router();

const authenticationRouter = require('./authentication');

appRouter.use(authenticationRouter);

module.exports = appRouter;