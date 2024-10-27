// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import axios from 'axios';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data); // Ensure this matches the response structure
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
    };

    const welcomeStyle = {
        fontSize: '2.5rem',
        marginBottom: '20px',
        color: '#2C3E50',
        fontWeight: 'bold',
    };

    const productListHeaderStyle = {
        fontSize: '1.8rem',
        color: '#34495E',
        marginBottom: '15px',
        borderBottom: '2px solid #2980B9',
        display: 'inline-block',
        paddingBottom: '5px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={welcomeStyle}>Welcome to Epicraft</h1>
            
            <h2 style={productListHeaderStyle}>Product List</h2>
            <ProductList products={products} /> {/* Passing products to ProductList */}
        </div>
    );
};

export default HomePage;
