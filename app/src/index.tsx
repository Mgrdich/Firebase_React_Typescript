import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./Style/style.css";
import {BrowserRouter} from "react-router-dom";
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));


