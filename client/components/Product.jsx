import React, { Component } from 'react'

class Product extends Component {
  render() {
    const { id, productImage, productName, productDescription, price, quantity, addToCart } = this.props;
    const cartProduct = {
      id,
      quantity: 1
    };
    return (
      <div className="product">
        <img src={productImage} />
        <h3>{productName}</h3>
        <p>{productDescription}</p>
        <strong className="price">${price}</strong>
        <p><strong>In Stock:</strong> {quantity} left</p>
        <button
          className="cart" 
          onClick={() => {
            return addToCart(cartProduct);
        }}>Add To Cart</button>
      </div>
    )
  }
}

export default Product;
