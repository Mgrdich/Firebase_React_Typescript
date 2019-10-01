import React from 'react';
import CityLogo from "../UI/icons";

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo linkTo="/" height={70} width={70}/>
                <div className="footer_discl">
                    Manchester city 2018.All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;