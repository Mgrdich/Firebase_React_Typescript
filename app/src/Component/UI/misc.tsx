import React from 'react';
import {ITags} from "../../Interfaces";
import {Link} from "react-router-dom";

const Tag: React.FC<ITags> = (props) => {
    const template: JSX.Element = <div style={{
        background: props.bck,
        fontSize: props.size,
        color: props.color,
        padding: '5px 10px',
        display: 'inline-block',
            ...props.add
    }}> </div>;

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

export default Tag;