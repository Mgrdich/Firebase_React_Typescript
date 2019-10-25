import React from 'react';
import {ITags} from "../../Interfaces";
import {Link} from "react-router-dom";

export const Tag: React.FC<ITags> = (props) => {
    const template: JSX.Element = <div style={{
        background: props.bck,
        fontSize: props.size,
        color: props.color,
        padding: '5px 10px',
        display: 'inline-block',
            ...props.add
    }}>{props.children} </div>;

    if (props.link) {
        return (
            <Link to={props.linkTo}>
                {template}
            </Link>
        );
    } else {
        return template;
    }
};

