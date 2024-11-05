import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthProvider';

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider></AuthProvider>
        <App />
    </React.StrictMode>
)