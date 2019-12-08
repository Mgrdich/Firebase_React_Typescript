import React from 'react';
import {Redirect, Route, RouteProps} from "react-router";
import {useSession} from "../../reusableHooks/useSession";

const PrivateRoutes: React.FC<RouteProps> = (props) => { //TODO check the props whether it is needed in your case
    const {user} = useSession();
    const { component: Comp, ...rest}: any = props;
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