import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './App.css';
import ShopContextProvider from './context/Context.jsx';

const root = document.getElementById('root');

// Use createRoot
const rootElement = createRoot(root);

rootElement.render(
  <ShopContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShopContextProvider>,
);