import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Styling imports
import './styles/global.css';
import './styles/envelope.css';
import './styles/animations.css';
import './styles/responsive.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
