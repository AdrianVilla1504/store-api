const express = require('express');
const productsRouter = require('./products.router');
const healtcheckRouter = require('./healtcheck.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/healthcheck', healtcheckRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
