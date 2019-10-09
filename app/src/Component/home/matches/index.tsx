import React from 'react';
import Tag from "../../UI/misc";

const MatchesHome:React.FC = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                    bck="#0e1731"
                    color="#ffffff"
                    size="50px"
                    linkTo=""
                >Mathces</Tag>
                <Tag
                bck="#ffffff"
                size="22px"
                color="#0e1731"
                link={true}
                linkTo="/the_team"
                >
                See more Matches
                </Tag>
            </div>
        </div>
    );
};

export default MatchesHome;