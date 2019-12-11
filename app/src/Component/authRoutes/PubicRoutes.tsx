import React from 'react';
import {Redirect, Route} from "react-router";
import {useSession} from "../../reusableHooks/useSession";
import {IPublicRoute} from "../../Interfaces";

const PubicRoutes: React.FC<IPublicRoute> = (props) => { //TODO check the props whether it is needed in your case a
    const {user} = useSession();                                   // and also the route that you will be transferred
    const {component: Comp, restricted,...rest}:any = props;
    return <Route {...rest} component={(props: any) => (
        restricted ?
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

