import React from 'react';
import {Redirect, Route} from "react-router";
import {useSession} from "../../reusableHooks/useSession";
import {IPublicRoute} from "../../Interfaces";

const PubicRoutes: React.FC<IPublicRoute> = (props) => {
    const {user} = useSession();
    const {component: Comp, restricted, propsComp, ...rest}: any = props;
    const componentProp = propsComp ? propsComp : null;
    return <Route {...rest} component={(props: any) => (
        restricted ?
            (user ?
                    <Redirect to="/dashboard"/>
                    :
                    <Comp {...componentProp} user={user}/>
            )
            :
            <Comp  {...componentProp} user={user}/>
    )}/>
};

export default PubicRoutes;

