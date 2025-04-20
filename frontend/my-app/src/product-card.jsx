import React from "react";
import { useState } from "react";
import axios from "axios";

const ProductCard = ({ product,changeRecomProducts }) => {
  const [showModal, setShowModal] = useState(false);
  const handleProductView = async (product) => {
    console.log("product clicked", product);
    try {
      await axios.post("/api/recommend", { product });
      changeRecomProducts();
      console.log(`Tracked view for product ${product.id}`);
    } catch (err) {
      console.error("Error tracking product view:", err);
    }
  };
  return (
    <>
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
          <button
            className="view-details-btn"
            onClick={() => {
              setShowModal(true);
              handleProductView(product);
            }}
          >
            View Details
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{product.title}</h2>
            <p>This is the product detail page</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
