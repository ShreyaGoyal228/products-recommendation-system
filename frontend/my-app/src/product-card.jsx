import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
    <div className="image-container">
      <img
        src={product.images[0] || "./product-fallback-image.jpg"}
        alt={product.title}
        className="product-image"
      />
    </div>
    
    <div className="product-info">
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      
      <div className="product-footer">
        <span className="product-price">${product.price}</span>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
    <style jsx>{`
      .product-card {
        width: 380px;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        border: 1px solid #eaeaea;
        background-color: white;
        margin: 24px;
        font-family: Arial, sans-serif;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
      }

      .image-container {
        position: relative;
      }

      .product-image {
        width: 100%;
        height: 220px;
        object-fit: cover;
      }

      .badge {
        position: absolute;
        top: 12px;
        right: 12px;
        background-color: #5046e5;
        color: white;
        font-size: 12px;
        font-weight: bold;
        padding: 4px 10px;
        border-radius: 20px;
      }

      .product-info {
        padding: 24px;
      }

      .product-title {
        font-size: 22px;
        font-weight: bold;
        color: #222;
        margin: 0 0 8px 0;
      }

      .product-description {
        color: #666;
        font-size: 14px;
        margin-bottom: 16px;
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .product-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
      }

      .product-price {
        font-size: 20px;
        font-weight: bold;
        color: #5046e5;
      }

      .add-to-cart-btn {
        background-color: #5046e5;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 10px 16px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .add-to-cart-btn:hover {
        background-color: #3f37b3;
      }
    `}</style>
    </div>
  );
};

export default ProductCard;
