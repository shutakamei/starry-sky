import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container missing in index.html');
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar />
  </React.StrictMode>
);
