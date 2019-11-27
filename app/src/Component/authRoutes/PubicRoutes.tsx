import React from 'react';
import {ICompRoutes} from "../../Interfaces";
import {Redirect, Route} from "react-router";

const PubicRoutes: React.FC<any> = (props) => {
    const  {rest,user,props:pp,component:Comp} = props;
    return <Route {...rest} component={(pp:any)=>(
        rest.restricted ?
            ( user ?
                    <Redirect to="/dashboard"/>
                    :
                    <Comp {...props} user={user}/>
            )
            :
            <Comp {...props} user={user}/>
    )}/>
};

export default PubicRoutes;

