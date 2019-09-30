import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import {Link} from "react-router-dom";
import CityLogo from "../UI/icons";

const Header = () => {
    return (
        <AppBar
           position="fixed"
           style={{
               backgroundColor:'#98c5e9',
               boxShadow:'none',
               padding:'10px 0',
               borderBottom:'2px solid #00285e'
           }}
        >
        <Toolbar style={{display:'flex'}}>
            <div style={{flexGrow:1}}>
                <div className="header_logo">
                    <CityLogo
                        linkTo="/"
                        link={true}
                        height={70}
                        width={70}
                    />
                </div>
            </div>
            <Link to="team">
                <Button color="inherit">The Team</Button>
            </Link>
            <Link to="mathces">
                <Button color="inherit">Matches</Button>
            </Link>
        </Toolbar>
        </AppBar>
    );
};

export default Header;