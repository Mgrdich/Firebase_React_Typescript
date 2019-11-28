import React from 'react';
import {ICompRoutes} from "../../Interfaces";
import {Redirect, Route} from "react-router";

const PrivateRoutes: React.FC<ICompRoutes> = (props) => {
    const {user, component: Comp, ...rest}: any = props;

    console.log(props);
    return (
        <Route {...rest} render={(props: any) => (
            (user) ?
                <Comp {...props} user={user}/>
                :
                <Redirect to="/signin"/>
        )}/>
    )
};

export default PrivateRoutes;