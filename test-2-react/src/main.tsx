import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

fetch('http://localhost:3002/render-app')
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        renderApp();
    })
    .catch(error => console.error('Error triggering rendering:', error));
