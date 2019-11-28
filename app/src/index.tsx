import React from 'react';
import ReactDOM from 'react-dom';
import AppAuth from "./AppAuth";
import "./Style/style.css";
import {BrowserRouter} from "react-router-dom";
// import WebFont from 'webfontloader';
/*
WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});*/

ReactDOM.render(<BrowserRouter><AppAuth/></BrowserRouter>, document.getElementById('root'));


