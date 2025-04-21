##  Product Recommendation App

A full-stack application that displays products and dynamically shows recommended products based on user interaction.

##  Overview

This application consists of:

- **Frontend:** React.js  
- **Backend:** Node.js + Express.js  
- **Functionality:**  
  - Users can view a list of all products.  
  - On clicking **View Details** of a product, that product is added to the recommended list.  
  - Recommended products are then shown on the homepage.

##  Install Dependencies
To install all required dependencies, run the following command at the separately inside the backend and frontend/my-app of the project:
npm i

##  Api functionality
GET /api/products
Fetch all available products to be shown on the frontend.

GET /api/recommend
Fetch the list of recommended products based on user interactions.

POST /api/recommend
Add a product to the recommended list when a user views its details.

##  Start the application

- **Backend:**  cd backend/npm start
- **Frontend:**  cd frontend/my-app npm start

