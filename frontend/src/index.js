// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from react-dom/client
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Create root from createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
