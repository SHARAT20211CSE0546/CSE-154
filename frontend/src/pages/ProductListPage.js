import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    if (!products || products.length === 0) {
        return <div>No products available</div>;
    }

    const productListStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        padding: '20px',
    };

    const productCardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        transition: 'transform 0.2s ease-in-out',
        cursor: 'pointer',
    };

    const productImageStyle = {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        marginBottom: '10px',
        borderRadius: '4px',
    };

    const productTitleStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '8px',
    };

    const productPriceStyle = {
        color: '#2ECC71',
        fontSize: '1rem',
    };

    return (
        <div style={productListStyle} className="product-list">
            {products.map(product => (
                <Link to={`/products/${product._id}`} key={product._id} style={{ textDecoration: 'none' }}>
                    <div className="product-card" style={productCardStyle}>
                        <img
                            src={`http://localhost:5000/${product.imageUrl}`}
                            alt={product.name}
                            style={productImageStyle}
                            className="product-image"
                            onError={(e) => { e.target.src = 'path_to_default_image.jpg'; }} // Fallback image
                        />
                        <div style={productTitleStyle} className="product-title">{product.name}</div>
                        <div style={productPriceStyle} className="product-price">${product.price}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductList;
