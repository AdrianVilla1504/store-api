const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

router.get('/', (req, res)=>{
  const products  = [];
  const { size }  = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index ++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    })
  }
  res.json(products)
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
});

router.get('/:categoryId/products/:productId', (req, res)=> {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  })
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'success',
    data: body
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'deleted',
    id,
  })
});
module.exports = router;
