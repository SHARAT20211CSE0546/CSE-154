# CSE-154
Here’s a sample `README.md` file for your Epicraft e-commerce project, covering all the essential sections:

---

# Epicraft - E-commerce Platform for Artisans

Epicraft is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) e-commerce web application designed to promote and support the Indian handicraft industry. This platform enables artisans to showcase and sell their handmade products globally, with features for both users and admins such as product management, user authentication, and payment integration.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Registration & Login**: Sign up and login functionality for users, with secure password handling using JWT authentication.
- **Product Management**: Users can view a list of products and their details. Admins can add, update, or delete products.
- **Responsive Design**: Frontend built using React for a seamless and interactive user experience on all devices.
- **Payment Gateway**: Planned integration with a payment gateway (Stripe/PayPal).
- **Admin Dashboard**: For managing products and viewing sales statistics.

## Tech Stack

### Frontend:
- React.js
- React Router for navigation
- Axios for API calls
- Bootstrap for UI styling

### Backend:
- Node.js and Express.js
- MongoDB with Mongoose for database management
- JWT for authentication
- bcrypt for password hashing

## Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (v14 or above)
- MongoDB (local instance or cloud-based)

### Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/kalkerisharat/epicraft-ecommerce.git
   cd epicraft-ecommerce
   ```

2. **Backend Setup:**

   Navigate to the `backend` folder and install dependencies:

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the `backend` directory with the following environment variables:

   ```env
   MONGO_URI=mongodb+srv://<your-mongo-db-uri>
   JWT_SECRET=mySuperSecretKey
   PORT=5000
   ```

   Run the backend server:

   ```bash
   npm start
   ```

3. **Frontend Setup:**

   Navigate to the `frontend` folder and install dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

   Run the frontend React app:

   ```bash
   npm start
   ```

4. Open the application in your browser at `http://localhost:3000`.

## API Endpoints

Here are the key API endpoints for the backend:

- `POST /api/users/signup`: User registration
- `POST /api/users/login`: User login
- `GET /api/products`: Fetch all products
- `GET /api/products/:id`: Fetch product details
- `POST /api/products`: Add a new product (admin only)
- `PUT /api/products/:id`: Update product details (admin only)
- `DELETE /api/products/:id`: Delete a product (admin only)

## Usage

### User Features:

- **Browse Products**: Users can view a list of all available products and check detailed information for each one.
- **User Authentication**: Sign up and login to gain access to user-specific features.
- **Add Products to Cart**: Planned feature for users to add products to their cart for checkout.
- **Checkout and Payment**: Planned integration with a payment gateway.

### Admin Features:

- **Product Management**: Admins can add, edit, and delete products from the inventory.
- **Sales Dashboard**: Planned feature to view sales data and track performance.

## Folder Structure

```
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
├── frontend
│   ├── public
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   └── App.js
└── README.md
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License.

---
