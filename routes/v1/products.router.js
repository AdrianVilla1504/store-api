const express = require('express');
const productsService = require('../../services/product.service')

const router = express.Router();

const service = new productsService();

router.get('/', (req, res)=>{
  const products  = service.find();
  res.json(products)
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product  = service.findOne(id);
  res.json(product)
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
  res.status(201).json({
    message: 'created',
    data: body
  });
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'success',
    data: body
  })
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
