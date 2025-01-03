import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // استدعاء App.jsx

// ربط React بالـ DOM
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);