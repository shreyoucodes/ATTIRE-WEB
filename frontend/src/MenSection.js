// WomenSection.js

import React from 'react';
import products from './datamen';
import { useLocation } from 'react-router-dom';

const MenSection = () => {
  const location = useLocation();
  const isMensPage = location.pathname === '/men';

  const sectionStyle = {
    background: isMensPage ? '#ccc' : 'inherit',
    padding: '20px', // Add additional styling if needed
  };

  return (
    <div style={sectionStyle}>
      <h2>MEN</h2>
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

export default MenSection;
