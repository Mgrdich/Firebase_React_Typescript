import React from 'react';
import {Link} from "react-router-dom";
import mcitylogo from "../../Style/images/logos/manchester_city_logo.png";
import {LogoProps} from "../../Interfaces";


const CityLogo: React.FC<LogoProps> = ({link, linkTo, width, height}) => {

    const Logo: JSX.Element = <div className="img_cover"
                                   style={{width:`${width}px`, height:`${height}px`, background: `url(${mcitylogo}) no-repeat`}}
    >
    </div>;
    if (link) {
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