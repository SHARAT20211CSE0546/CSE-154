// backend/routes/ProductRoutes.js

const express = require('express');
const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/ProductController'); // Update the path if necessary

const router = express.Router();

// POST route to create a new product
router.post('/', createProduct);

// GET route to fetch all products
router.get('/', getAllProducts);

// GET route to fetch a single product by ID
router.get('/:id', getProductById);

// PUT route to update a product by ID
router.put('/:id', updateProduct);

// DELETE route to delete a product by ID
router.delete('/:id', deleteProduct);

module.exports = router;
