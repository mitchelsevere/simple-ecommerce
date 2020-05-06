const db = require('../models/onlineStore');

const productController = {};

productController.getProducts = (req, res, next) => {
  const select = 'SELECT * FROM products';
  db.query(select)
    .then((products) => {
      res.locals.products = products.rows;
    })
    .then(next)
    .catch((err) => next({
      log: 'productController.getProducts: ERROR: Error getting products data from database',
      message: 'productController.getProducts: ERROR: Check server logs for details',
    }));
};

productController.updateInventory = (req, res, next) => {
  const { products } = req.body;
  const promises = [];
  const update = `
    UPDATE products
    SET quantity = quantity - $1
    WHERE _id = $2;
  `;
  products.forEach((product) => {
    const values = [product.quantity, product.id];
    promises.push(db.query(update, values));
  });

  Promise.all(promises)
    .then((res) => {
      console.log(res);
    })
    .then(next)
    .catch((err) => next({
      log: 'productController.updateInventory: ERROR: Error updating product inventory from database',
      message: 'productController.updateInvetory: ERROR: Check server logs for details',
    }));
};

module.exports = productController;
