import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { CartComponentContext } from './contexts/CartContext/CartContext';
import { Router } from './Router/Router';

function App() {
  return (
    <BrowserRouter>
      <CartComponentContext>
        <NavBar />
        <Router />
      </CartComponentContext>
    </BrowserRouter>
  );
}

export default App;
