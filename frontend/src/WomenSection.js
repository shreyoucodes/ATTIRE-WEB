// WomenSection.js

import React from 'react';
import products from './datawomen';
import { useLocation } from 'react-router-dom';

const WomenSection = () => {
  const location = useLocation();
  const isWomenPage = location.pathname === '/women';

  const sectionStyle = {
    background: isWomenPage ? '#e6f2ff' : 'inherit',
    padding: '20px', // Add additional styling if needed
  };

  return (
    <div style={sectionStyle}>
      <h2>WOMEN</h2>
      <div className="image-container">
        {products.map((product, index) => (
          <div key={index} className="product-box">
            <img src={product.imageUrl} alt={`Product ${index + 1}`} />
            <p className="product-description">{product.description}</p>
            <p className="product-description">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenSection;
