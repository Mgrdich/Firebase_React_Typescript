import React from 'react';
import Header from "../Component/Header_Footer/Header";
import Footer from "../Component/Header_Footer/Footer";
import {LayoutProps} from "../Interfaces";

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
};

export default Layout;