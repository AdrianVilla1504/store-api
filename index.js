const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routerApi = require('./routes/v1/')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler' );

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('App running on port ' + port)
});
