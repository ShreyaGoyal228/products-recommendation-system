import { useEffect,useState } from "react";
import axios from "axios";
import React from "react";
import ProductCard from "./product-card";
import Recommendations from "./recommendations";
function App() {
  const [products,setProducts]=useState([]);
  const [reloadRecommendations, setReloadRecommendations] = useState(false);
  const fetchProducts = async () => {
    const allProducts = await axios.get("/api/products");
    setProducts(allProducts.data);
    console.log("products are", allProducts.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductView=async(product)=>{
    console.log("product clicked", product);
    try{
        await axios.post("/api/recommend",{product});
        setReloadRecommendations(prev => !prev)
        console.log(`Tracked view for product ${product.id}`);
    }
    catch(err){
      console.error("Error tracking product view:", err);
    }
  }

  return (
    <div>
      {/* Recommened Products */}
      <section class="recommendations-section">
        <Recommendations reloadRecommendations={reloadRecommendations}/>
      </section>

      {/* All products */}
      <h2 class="products-container">All Products</h2>
      <div class="grid-container">
    {products.map((item)=>(
       <div 
       key={item.id} 
       onClick={() => {
        console.log("clicked product", item.id);
        handleProductView(item)}}
     >
       <ProductCard product={item} />
     </div>
    ))}
    </div>
  </div>

  )
}

export default App;
