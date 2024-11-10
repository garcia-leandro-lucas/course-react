import React from 'react';
import ReactDom from 'react-dom/client'

/* import {HelloWorldApp} from './HelloWorldApp'; */

import {FirstApp} from './FirstApp'
import { CounterApp } from './CounterApp'

import './index.css';

ReactDom.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <CounterApp value={200}/>
        {/* <FirstApp title="Hola soy Vegeta" /> */}
    </React.StrictMode>

);




