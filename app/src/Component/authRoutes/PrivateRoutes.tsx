import React from 'react';
import {ICompRoutes} from "../../Interfaces";
import {Redirect, Route} from "react-router";

const PrivateRoutes:React.FC<ICompRoutes> = (props) => {
    const {user,component:Comp}:any = props;

    return (
        <Route component={() => (
        (user) ?
            <Comp user={user}/>
            :
            <Redirect to="/sign_in"/>
    )}/>
    )
};

export default PrivateRoutes;