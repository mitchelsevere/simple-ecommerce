import React, { Component } from 'react';
import ProductPage from './ProductPage.jsx';
import ShoppingList from "./ShoppingList.jsx";

class ShoppingContainer extends Component {
  constructor() {
    super();

    this.state = {
      products: null,
      cart: [],
    }

    this.addToCart = this.addToCart.bind(this);
    this.purchaseProducts = this.purchaseProducts.bind(this);
  }

  componentDidMount() {
    console.log('cdm');
    fetch('/api/products')
    .then(res => res.json())
    .then((products) => { 
      this.setState({
        products: products,
      })
    });
  }

  addToCart(product) {
    const { cart, products } = this.state;
    for (let i = 0; i < cart.length; i += 1) {
      const currentProduct = cart[i];
      if (currentProduct.id === product.id) {
        const updatedQuantity = cart.slice();
        updatedQuantity[i].quantity = updatedQuantity[i].quantity + 1;
        return this.setState({
          cart: updatedQuantity
        });
      }
    }
    this.setState((state) => ({
      cart: [...state.cart, product],
    }));
  }

  purchaseProducts() {
    console.log('purchase products');
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }, 
      body: JSON.stringify({ products: this.state.cart })
    })
    .then(res => res.json())
    .then((products) => { 
      this.setState({
        products: products,
      })
    });
  }

  render() {
    const { products, cart } = this.state;
    console.log('cart', cart);
    return (
      <div>
        <ShoppingList 
          cart={cart} 
          purchaseProducts={this.purchaseProducts}
        />
        <ProductPage 
          products={products} 
          addToCart={this.addToCart}
        />
      </div>
    )
  }
}

export default ShoppingContainer;
