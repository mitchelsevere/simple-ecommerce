import React, { Component } from 'react';
import Product from './Product.jsx';

class ProductPage extends Component {
  render() {
    const { products, addToCart } = this.props;
    const productList = products && products.map((product) => {
      return (
        <Product 
          key={`product${product._id}`}
          id={product._id}
          productName={product.product_name}
          productImage={product.product_img}
          productDescription={product.product_description}
          price={product.price}
          quantity={product.quantity}
          addToCart={addToCart}
          d
        />
      )
    });
    return (
      <div id="shop">
        <h2 className="shop-head">Essential Oils</h2>
        {productList}
      </div>
    )
  }
}

export default ProductPage;