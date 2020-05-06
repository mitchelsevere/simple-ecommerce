const express = require('express');
const path = require('path');

const productsController = require('./controllers/productController');

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => (
  res.sendFile(path.resolve(__dirname, 'index.html'))
));

app.get('/api/products',
  productsController.getProducts,
  (req, res) => {
    return res.json(res.locals.products);
  });

app.post('/api/products',
  productsController.updateInventory,
  productsController.getProducts,
  (req, res) => {
    return res.json(res.locals.products);
  });

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log, errorObj.message);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('Server running on PORT', 3000);
});
