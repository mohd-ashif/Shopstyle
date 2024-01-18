import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './App.css';
import ShopContextProvider from './context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShopContextProvider>,
);
