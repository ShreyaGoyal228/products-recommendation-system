import { useEffect,useState } from "react";
import axios from "axios";
import React from "react";
import ProductCard from "./product-card";
function App() {
  const [products,setProducts]=useState([]);
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
    {products.map((item)=>(
      <ProductCard key={item.id} product={item}/>
    ))}
  </div>

  )
}

export default App;
