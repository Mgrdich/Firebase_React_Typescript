import React from 'react';
import {Redirect, Route, RouteProps} from "react-router";
import {useSession} from "../../reusableHooks/useSession";

const PrivateRoutes: React.FC<RouteProps> = (props) => {
    const {user} = useSession();
    const { component: Comp,propsComp, ...rest}: any = props;
    const componentProp = propsComp ? propsComp : null;
    return (
        <Route {...rest} render={() => (
            (user) ?
                <Comp {...componentProp} user={user}/>
                :
                <Redirect to="/signin"/>
        )}/>
    )
};

export default PrivateRoutes;