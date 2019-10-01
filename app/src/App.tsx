import React from 'react';
import Layout from "./HOC/Layout";
import {Switch, Route} from "react-router-dom";
import Home from "./Component/home";


const App = () => {
    return (
        <>
            <Layout>
                <Switch>
                    <Route exact component={Home} path="/"/>
                </Switch>
            </Layout>
        </>
    );
};

export default App;