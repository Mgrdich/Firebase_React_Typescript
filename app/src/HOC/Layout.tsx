import React from 'react';
import Header from "../Component/Header_Footer/Header";
import Footer from "../Component/Header_Footer/Footer";

interface LayoutProps {
    children:JSX.Element
}
const Layout:React.FC<LayoutProps> = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default Layout;