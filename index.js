const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routerApi = require('./routes/v1/')

app.use(express.json());

app.listen(port, () => {
  console.log('App running on port ' + port)
});

routerApi(app);
