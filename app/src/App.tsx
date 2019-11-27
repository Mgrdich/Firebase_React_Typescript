import React from 'react';
import Layout from "./HOC/Layout";
import {Switch, Route} from "react-router-dom";
import Home from "./Component/home";
import Signin from "./Component/signin";
import Dashboard from "./Component/admin/Dashboard";
import PrivateRoutes from "./Component/authRoutes/PrivateRoutes";


const App = () => {
    return (
        <>
            <Layout>
                <Switch>
                    <PrivateRoutes user={"ss"} component={PrivateRoutes} path="/dashboard" exact/>
                    <Route exact component={Dashboard} path="/admin"/>
                    <Route exact component={Signin} path="/signin"/>
                    <Route exact component={Home} path="/"/>
                </Switch>
            </Layout>
        </>
    );
};

export default App;