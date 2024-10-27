// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const headerStyle = {
        backgroundColor: '#333',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const navStyle = {
        display: 'flex',
        gap: '20px',
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: 'bold',
    };

    // const linkHoverStyle = {
    //     textDecoration: 'underline',
    // };

    return (
        <header style={headerStyle}>
            <nav style={navStyle}>
                <Link to="/" style={linkStyle} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
                    Home
                </Link>
                <Link to="/products" style={linkStyle} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
                    Products
                </Link>
                <Link to="/signup" style={linkStyle} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
                    Sign Up
                </Link>
                <Link to="/login" style={linkStyle} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
                    Login
                </Link>
            </nav>
        </header>
    );
};

export default Header;
