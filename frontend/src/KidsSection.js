// WomenSection.js

import React from 'react';
import products from './datakids';
import { useLocation } from 'react-router-dom';

const KidsSection = () => {
  const location = useLocation();
  const isKidsPage = location.pathname === '/kids';

  const sectionStyle = {
    background: isKidsPage ? '#ccc' : 'inherit',
    padding: '20px', // Add additional styling if needed
  };

  return (
    <div style={sectionStyle}>
      <h2>KIDS</h2>
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

export default KidsSection;
