import { useState } from "react";
import ProductCard from "./product-card";
import { useEffect } from "react";
import axios from "axios";

const Recommendations = ({reloadRecommendations}) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`/api/recommend/`);
        setRecommendations(response.data || []);
        console.log("recommended products are", response.data);
      } catch (err) {
        console.error("Error fetching recommendations:", err);
      }
    };

    fetchRecommendations();
  }, [reloadRecommendations]);

  return (
    <div class="recommendations-container">
      <h2>Recommended For You</h2>
      <div class="grid-container">
        {recommendations.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
