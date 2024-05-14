// App.js
import React, { useState } from 'react';

import Search from './Search';
import Cart from './Cart';
import iIamge from './images/iphone12.jpg';
import Iamge from './images/ipad.jpeg';
import mac from './images/mac.jpg';
import book from './images/mac1.jpeg';
import imac from './images/imac.jpeg';
import mini from './images/mini.jpeg';
import watch from './images/watch.jpg';
import air from './images/air.jpeg';
import iair from './images/iair.jpeg';
import se from './images/se.jpeg';
import './styles.css'; // Import the CSS file for styling

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'iPhone 12', price: 999 , image: iIamge},
    { id: 2, name: 'iPad Pro', price: 799 , image: Iamge},
    { id: 3, name: 'MacBook Air', price: 999 , image: mac},
    { id: 4, name: 'MacBook Pro', price: 1299 , image: book},
    { id: 5, name: 'iMac', price: 1099 , image: imac},
    { id: 6, name: 'Mac Mini', price: 699 , image: mini},
    { id: 7, name: 'Apple Watch Series 6', price: 399 , image: watch},
    { id: 8, name: 'AirPods Pro', price: 249 , image: air },
    { id: 9, name: 'iPad Air', price: 599 , image: iair},
    { id: 10, name: 'iPhone SE', price: 399 , image: se},
    
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product, quantity) => {
    const existingIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container">
      <div className="left-column">
        <h1 className="app-title">Online Shopping Application</h1>
        <Search products={products} addToCart={addToCart} />
      </div>
      <div className={`right-column ${cartOpen ? 'open' : ''}`}>
        <button className="cart-toggle-btn" onClick={() => setCartOpen(!cartOpen)}>
          {cartOpen ? 'Close Cart' : 'Open Cart'}
        </button>
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
        <div className="checkout">
          <div className="total-price">
            Total Price: ${totalPrice.toFixed(2)}
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default App;
