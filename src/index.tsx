import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import type { AlertOptions } from 'react-alert';

const options: AlertOptions = {
  timeout: 2000,
  position: positions.BOTTOM_CENTER,
};

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container missing in index.html');
}

const root = ReactDOM.createRoot(container);

root.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AlertProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
