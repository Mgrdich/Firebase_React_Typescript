import React from 'react';
import Layout from "./HOC/Layout";
import {Switch, Route} from "react-router-dom";
import Home from "./Component/home";
import "./Firebase"
import Signin from "./Component/signin";

const App = () => {
    return (
        <>
            <Layout>
                <Switch>
                    <Route exact component={Signin} path="/signin"></Route>
                    <Route exact component={Home} path="/"/>
                </Switch>
            </Layout>
        </>
    );
};

export default App;