// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductList from './components/ProductList';
import { getProducts } from './api/api'; // Import your API function

const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productData = await getProducts(); // Fetch products from API
                setProducts(productData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Router>
            <Header />
            {loading && <p>Loading products...</p>}
            {error && <p>Error: {error}</p>}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/products" element={<ProductList products={products} />} /> {/* Pass products to ProductList */}
                <Route path="/products/:id" element={<ProductDetailPage />} />
            </Routes>
        </Router>
    );
};

export default App;
