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
        return (
            <div className="loadingPage">
                <div className="loader"><ClipLoader color="white" size={250} sizeUnit="px"/></div>
            </div>
            )
    }

    return (
        <UserContext.Provider value={{user,initializing}}>
            <App/>
        </UserContext.Provider>
    );
};

export default AppAuth;