
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
  res.send('Hi express server');
});

app.get('/v1/healtcheck', (req, res) => {
  res.send(`Hi, I'm  a new healtcheck route`);
});

app.get('/v1/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000
  })
});

app.listen(port, () => {
  console.log('My port ' + port)
});
