
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res)=>{
  res.send('Hi express server');
});

app.get('/v1/healtcheck', (req, res) => {
  res.send(`Hi, I'm  a new healtcheck route`);
});

app.get('/v1/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 2000
    }
  ])
});

app.get('/v1/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
});

app.get('/v1/categories/:categoryId/products/:productId', (req, res)=> {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  })
});



app.listen(port, () => {
  console.log('My port ' + port)
});
