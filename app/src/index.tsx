import React from 'react';
import ReactDOM from 'react-dom';
import AppAuth from "./AppAuth";
import "./Style/style.css";
import {Router} from "react-router";
import {history} from "./History/history";
// import WebFont from 'webfontloader';
/*
WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});*/

ReactDOM.render(<Router history={history}><AppAuth/></Router>, document.getElementById('root'));


