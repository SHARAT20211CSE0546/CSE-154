const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Log the current working directory
console.log('Current working directory:', process.cwd()); // Check current working directory

// Log the MongoDB URI for debugging
console.log('MONGO_URI:', process.env.MONGO_URI); // Check if the MongoDB URI is loaded correctly

const app = express();
const PORT = process.env.PORT || 5000;     

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('MongoDB connection error:', err.message); // More detailed error logging
});

// Basic Route
app.get('/', (req, res) => {
    res.send('Welcome to the Epicraft API!');
});

// Import product routes
const productRoutes = require('./routes/ProductRoutes');
// Import user routes
const userRoutes = require('./routes/userRoutes'); // Adjust the path as necessary

// Use product routes
app.use('/api/products', productRoutes); 
// Use user routes
app.use('/api/users', userRoutes); // Set up user authentication routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});  
