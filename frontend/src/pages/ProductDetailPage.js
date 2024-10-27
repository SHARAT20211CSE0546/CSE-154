import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetailPage = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                setError('Error fetching product details. Please try again later.');
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>{product?.name}</h1> {/* Use optional chaining to avoid errors if product is null */}
            <img 
                src={`http://localhost:5000/${product?.imageUrl}`} // Ensure the correct path to the image
                alt={product?.name} 
                style={{ width: '300px', height: '300px', objectFit: 'cover' }} 
            />
            <p>{product?.description || 'No description available.'}</p>
            <p>Price: ${product?.price}</p>
            <button 
                onClick={() => navigate(-1)} 
                style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
            >
                Go Back
            </button>
        </div>
    );
};

export default ProductDetailPage;
