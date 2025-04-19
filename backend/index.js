const express = require("express");
const app = express();

const data = require("./MOCK_DATA.json");

app.get("/api/products", (req, res) => {
  const html = `
  <ul>
  ${data.products.map((product) => ` <li>${product.title}</li>`).join(" ")}
  
    </ul>`;
  return res.send(data.products);
});

app.listen(8000, () => {
  console.log("Server started on port 8000 successfully.");
});
