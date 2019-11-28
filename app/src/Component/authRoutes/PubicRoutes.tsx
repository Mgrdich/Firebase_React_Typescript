import React from 'react';
import {Redirect, Route} from "react-router";

const PubicRoutes: React.FC<any> = (props) => {
    const {user, component: Comp, ...rest} = props;
    return <Route {...rest} component={(props: any) => (
        rest.restricted ?
            (user ?
                    <Redirect to="/dashboard"/>
                    :
                    <Comp {...props} user={user}/>
            )
            :
            <Comp {...props} user={user}/>
    )}/>
};

export default PubicRoutes;

