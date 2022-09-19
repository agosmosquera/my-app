import React from 'react';
import {CarritoProvider} from './components/Context/CarritoContext'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CarritoProvider>
    <App /> 
    </CarritoProvider>
);


