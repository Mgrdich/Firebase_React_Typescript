import React from 'react';
import {ICompRoutes} from "../../Interfaces";
import {Redirect, Route} from "react-router";

const PrivateRoutes:React.FC<ICompRoutes> = (props) => {
    const {rest, user, props: pp,component:Comp} = props;

    return <Route {...rest} component={(pp:any) => (
        user ?
            <Comp {...pp} user={user}/>
            :
            <Redirect to="/sign_in"/>
    )}/>
};

export default PrivateRoutes;