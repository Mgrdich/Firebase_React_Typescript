import React from 'react';
import {ICompRoutes} from "../../Interfaces";
import {Redirect, Route} from "react-router";

const PrivateRoutes: React.FC<ICompRoutes> = (props) => {
    const {user, component: Comp, ...rest}: any = props;


    return (
        <Route {...rest} component={(props: any) => (
            (user) ?
                <Comp {...props} user={user}/>
                :
                <Redirect to="/sign_in"/>
        )}/>
    )
};

export default PrivateRoutes;