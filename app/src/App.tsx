import React from 'react';
import Layout from "./HOC/Layout";
import {Switch, Route} from "react-router-dom";
import Home from "./Component/home";
import Signin from "./Component/signin";
import Dashboard from "./Component/admin/Dashboard";
import PrivateRoutes from "./Component/authRoutes/PrivateRoutes";
import {useSession} from "./reusableHooks/useSession";


const App = () => {

    const {user} = useSession();
    return (
        <>
            <Layout>
                <Switch>
                    <PrivateRoutes user={user} component={Dashboard} path="/dashboard" exact/>
                    <Route exact component={Signin} path="/signin"/>
                    <Route exact component={Dashboard} path="/admin"/>
                    <Route exact component={Home} path="/"/>
                </Switch>
            </Layout>
        </>
    );
};

export default App;