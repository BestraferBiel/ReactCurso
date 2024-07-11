import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './HelloWorldApp.jsx';
import {FirstApp, SeApp} from './FirstApp.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <SeApp title='Hola soy el titulo de la segunda app'/>
    </React.StrictMode>

);