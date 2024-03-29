const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const routerApi = require('./routes/v1/')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler' );

app.use(express.json());
const whitelist =  ['http://localhost:8080', 'https://myapp.co']
const options = {
  origin: (origin, callback)  => {
    if(whitelist.includes(origin)){
      callback(null, true)
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(whitelist));
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('App running on port ' + port)
});
