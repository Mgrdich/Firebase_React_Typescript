import React from 'react';
import App from "./App";
import {UserContext} from "./reusableHooks/useSession";
import {useAuth} from "./reusableHooks/AuthFirebase";
import {ClipLoader} from "react-spinners";

const AppAuth = () => {
    const {initializing, user} = useAuth();
    if (initializing) {
        return <ClipLoader color="#0d1831" size={450} sizeUnit="px"/>;
    }

    return (
        <UserContext.Provider value={{user}}>
            <App/>
        </UserContext.Provider>
    );
};

export default AppAuth;