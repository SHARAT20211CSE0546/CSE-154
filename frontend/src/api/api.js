import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Fetch All Products API Call
export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Fetch Product Details API Call
export const getProductDetails = async (productId) => {
    try {
        const response = await axios.get(`${API_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;
    }
};

// Sign Up API Call
export const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users/signup`, userData);
        return response.data; // Return user data on successful sign-up
    } catch (error) {
        console.error('Error during sign up:', error.response?.data || error.message);
        throw error.response?.data || error; // Provide better error messages
    }
};

// Login API Call
export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, userData);
        return response.data; // Return user data and token on successful login
    } catch (error) {
        console.error('Error during login:', error.response?.data || error.message);
        throw error.response?.data || error; // Provide better error messages
    }
};
