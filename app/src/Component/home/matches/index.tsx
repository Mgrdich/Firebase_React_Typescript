import React from 'react';
import {Tag} from "../../UI/misc";
import Blocks from "./blocks";
import {MainColor,WhiteColor} from "../../../utilities/variables";

const MatchesHome:React.FC = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                    bck={MainColor}
                    color={WhiteColor}
                    size="50px"
                    linkTo=""
                >Mathces</Tag>
                <Blocks/>
                <Tag
                bck={WhiteColor}
                size="22px"
                color={MainColor}
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