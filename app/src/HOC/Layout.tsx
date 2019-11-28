import React from 'react';
import Header from "../Component/Header_Footer/Header";
import Footer from "../Component/Header_Footer/Footer";
import {LayoutProps} from "../Interfaces";
import {UserContext} from "../reusableHooks/useSession";
import {useAuth} from "../reusableHooks/AuthFirebase";
import ClipLoader from "react-spinners/ClipLoader";

const Layout: React.FC<LayoutProps> = (props) => {
    const {initializing, user} = useAuth();
    if (initializing) {
        return <ClipLoader color="#0d1831" size={450} sizeUnit="px"/>
    }
    return (
        <UserContext.Provider value={{user}}>
            <Header/>
            {props.children}
            <Footer/>
        </UserContext.Provider>
    );
};

export default Layout;