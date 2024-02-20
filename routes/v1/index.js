const productsRouter = require('./products.router');
const healtcheckRouter = require('./healtcheck.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  app.use('/v1/products', productsRouter);
  app.use('/v1/healtcheck', healtcheckRouter);
  app.use('/v1/users', usersRouter);
}

module.exports = routerApi;
