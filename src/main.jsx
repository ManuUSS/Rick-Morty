import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // Componente de orden superior - BrowserRouter
  <BrowserRouter>
    {/* Modo estricto de React, útil para entorno de desarrollo */}
    <React.StrictMode>
      <MainPage />
    </React.StrictMode>
  </BrowserRouter>
)
