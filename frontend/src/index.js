import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookContextProvider } from './Context/BookContext';
import { AuthContextProvider } from './Context/AuthenticateContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AuthContextProvider>
    <BookContextProvider>
      <Router>

        <App />
      </Router>
    </BookContextProvider>
  </AuthContextProvider>



);