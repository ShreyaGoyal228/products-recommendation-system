const express = require("express");
const app = express();
const fs = require("fs");

const data = require("./MOCK_DATA.json");
const recommendedProducts = require("./recommended_prod.json");

//middleware for the testing purpose of api in postman
app.use(express.urlencoded({ extended: true }));
//middleware to parse the json body
app.use(express.json());

//getting all the products
app.get("/api/products", (req, res) => {
  return res.send(data.products);
});

// getting the recommended products
app.get("/api/recommend", (req, res) => {
  return res.send(recommendedProducts);
});

// adding the recommended products
app.post("/api/recommend", (req, res) => {

  //already existed
  const alreadyExists = recommendedProducts.some(
    (item) => item.id === req.body.product.id
  );

  if (alreadyExists) {
    return res.json({
      status: "Product already recommended.",
    });
  }

  // If not, add it to the list
  recommendedProducts.push(req.body.product);
  fs.writeFile(
    "./recommended_prod.json",
    JSON.stringify(recommendedProducts),
    (err) => {
      if (err) {
        console.error("Error writing file", err);
        return res.status(500).json({ error: "Failed to write to file" });
      }
      return res.json({
        status: "Successfully added recommended product.",
      });
    }
  );
});

//listening the server to the port 8000
app.listen(8000, () => {
  console.log("Server started on port 8000 successfully.");
});
