const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routerApi = require('./routes/v1/')

const { logErrors, errorHandler } = require('./middlewares/error.handler' );

app.use(express.json());


app.listen(port, () => {
  console.log('App running on port ' + port)
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);
