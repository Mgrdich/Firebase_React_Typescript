import React from 'react';
import App from "./App";
import {ClipLoader} from "react-spinners";
import {useAuth} from "./reusableHooks/AuthFirebase";

export const UserContext = React.createContext<any>({
    user: null
});

const AppAuth = () => {
    const {initializing, user} = useAuth();

    if (initializing) {
        return <ClipLoader color="#0d1831" size={450} sizeUnit="px"/>;
    }

    return (
        <UserContext.Provider value={{user,initializing}}>
            <App/>
        </UserContext.Provider>
    );
};

export default AppAuth;