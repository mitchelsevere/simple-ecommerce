import React, { Component } from 'react';

class ShoppingList extends Component {
  render() {
    const { cart, purchaseProducts } = this.props;
    return (
      <div className="shop-cart">
        <button>Cart 🛒 <strong>{cart.length}</strong></button>
        <button 
          className="purchase"
          onClick={purchaseProducts}>
            <strong>Purchase</strong>
        </button>
      </div>
    )
  }
}

export default ShoppingList;
