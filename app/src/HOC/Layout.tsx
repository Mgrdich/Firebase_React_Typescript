import React from 'react';
import Header from "../Component/Header_Footer/Header";

interface LayoutProps {
    children:JSX.Element
}
const Layout:React.FC<LayoutProps> = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    );
};

export default Layout;