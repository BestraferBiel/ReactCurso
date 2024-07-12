import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './HelloWorldApp.jsx';
import {FirstApp, SeApp} from './FirstApp.jsx';
import { CounterApp } from './CounterApp.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={0}/>
    </React.StrictMode>

);