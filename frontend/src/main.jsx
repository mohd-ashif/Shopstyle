import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './App.css';
import ShopContextProvider from './context/Context.jsx';
import ErrorBoundary from './pages/ErrorBoundary .jsx';
import Product from "./pages/Product.jsx";

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <ShopContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShopContextProvider>,
);

  // Wrap your main component with ErrorBoundary
  <ErrorBoundary>
   
    <Product />
  </ErrorBoundary>
  