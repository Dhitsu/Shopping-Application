// Cart.js
import React from 'react';
import './styles.css'; // Import the CSS file for styling

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <div className="item-details">
              <span>{item.name}</span>
              <div className="quantity">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                />
                <span>${item.price}</span>
              </div>
            </div>
            <button onClick={() => removeFromCart(index)} className="remove-btn">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
