import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="your_domain" clientId="your_client_id" redirectUri="window.location.origin"><App /></Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
