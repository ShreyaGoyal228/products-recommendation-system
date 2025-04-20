import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.images[0] || "./product-fallback-image.jpg"}
        alt={product.title}
        className="product-image"
      />
    
    <div className="product-info">
      <h3>{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <p className="product-category">{product.category}</p>
      <button className="view-details-btn">View Details</button>
    </div>
    </div>
  );
};

export default ProductCard;
