import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from 'react-dom/client';

import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <App />
  </React.StrictMode>
);
