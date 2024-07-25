import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserStorage } from './contexts/contexts';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserStorage>
        <App />
      </UserStorage>   
    </BrowserRouter>
  </React.StrictMode>
);
