// Search.js
import React, { useState } from 'react';
import './styles.css'; // Import the CSS file for styling

const Search = ({ products, addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <ul className="search-results">
        {filteredProducts.map((product) => (
          <li key={product.id} className="search-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <span className="product-name">{product.name}</span>
            <span className="product-price">${product.price}</span>
            <button onClick={() => addToCart(product, 1)} className="add-to-cart-btn">
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
