import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import ProductCard from "./product-card";
import Recommendations from "./recommendations";
function App() {
  const [products, setProducts] = useState([]);
  const [reloadRecommendations, setReloadRecommendations] = useState(false);
  const fetchProducts = async () => {
    const allProducts = await axios.get("/api/products");
    setProducts(allProducts.data);
    console.log("products are", allProducts.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {/* Recommened Products */}
      <section class="recommendations-section">
        <Recommendations reloadRecommendations={reloadRecommendations} />
      </section>

      {/* All products */}
      <h2 class="products-container">All Products</h2>
      <div class="grid-container">
        {products.map((item) => (
          <div key={item.id}>
            <ProductCard product={item} changeRecomProducts={()=>setReloadRecommendations(prev=>!prev)}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
