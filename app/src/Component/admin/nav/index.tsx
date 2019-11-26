import React, {CSSProperties} from 'react';
import {Link} from "react-router-dom";
import playerList from "../../../JSON/listNav.json"
import ListItem from "@material-ui/core/ListItem";

type renderListItem = { title: string; linkTo: string; };

const styleNav: CSSProperties = {
    color: '#ffffff',
    fontWeight: 300,
    borderBottom: '1px solid #353535'
};

function renderList(list: Array<renderListItem>): Array<JSX.Element> {
    return list.map((item: renderListItem) => {
        return (
            <Link to={item.linkTo} key={item.title}>
                <ListItem button style={styleNav}>
                    {item.title}
                </ListItem>
            </Link>
        );
    })
}

function logoutHandler() {

}

const AdmiNav = () => {
    return (
        <>
            {renderList(playerList)}
            <ListItem button style={styleNav} onClick={()=>logoutHandler()}>
                Log out
            </ListItem>
        </>
    );
};

export default AdmiNav;