import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookContextProvider } from './Context/BookContext';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider domain="dev-lncbxu21otlh3mx0.us.auth0.com" clientId="3MRhkaDZq0GKilQuHDoQCPDm0kEwDIfp" authorizationParams={{
    redirect_uri: window.location.origin
  }}>
    <BookContextProvider>
      <Router>

        <App />
      </Router>
    </BookContextProvider>
  </Auth0Provider>


);