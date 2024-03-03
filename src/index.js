import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './jsx/App';
import { BrowserRouter } from 'react-router-dom';
import Router from "./jsx/Router"; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>
);

