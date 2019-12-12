import React from 'react';
import Layout from "./HOC/Layout";
import {Switch} from "react-router-dom";
import Home from "./Component/home";
import Signin from "./Component/signin";
import Dashboard from "./Component/admin/Dashboard";
import PrivateRoute from "./Component/authRoutes/PrivateRoutes";
import PubicRoutes from "./Component/authRoutes/PubicRoutes";
import AdminMatches from "./Component/admin/matches";

const App = () => {

    return (
        <>
            <Layout>
                <Switch>
                    <PrivateRoute path="/admin_matches" exact component={AdminMatches}/>
                    <PrivateRoute component={Dashboard} path="/dashboard" exact/>
                    <PubicRoutes exact restricted={true} component={Signin} path="/signin"/>
                    <PubicRoutes exact component={Dashboard} path="/admin"/>
                    <PubicRoutes exact restricted={false} component={Home} path="/"/>
                </Switch>
            </Layout>
        </>
    );
};

export default App;