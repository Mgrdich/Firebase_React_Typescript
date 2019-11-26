import React from 'react';
import {Link} from "react-router-dom";
import playerList from "../../../JSON/listNav.json"

type renderListItem = { title: string; linkTo: string; };

function renderList(list: Array<renderListItem>): Array<JSX.Element> {
    return list.map((item: renderListItem) => {
        return (
            <Link to={item.linkTo} key={item.title}>
                {item.title}
            </Link>
        );
    })
}

const AdmiNav = () => {
    return (
        <>
            {renderList(playerList)}
        </>
    );
};

export default AdmiNav;