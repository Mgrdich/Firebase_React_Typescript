import React from 'react';
import {Link} from "react-router-dom";
import mcitylogo from "../../Style/images/logos/machester_city_logo.png";

interface LogoProps {
    linkTo: string;
    link?: boolean;
    height: number;
    width: number;
}

const CityLogo: React.FC<LogoProps> = ({link, linkTo, width, height}) => {

    const Logo: JSX.Element = <div className="img_cover"
                                   style={{width:`${width}px`, height:`${height}px`, background: `url(${mcitylogo}) no-repeat`}}
    >
    </div>;
    if (Link) {
        return (
            <Link to={linkTo} className="link_logo">
                {Logo}
            </Link>
        );
    } else {
        return (Logo);
    }
};

export default CityLogo;