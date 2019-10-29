import React, {useState} from 'react';
import Stripes from "../../../Style/images/stripes.png";
import {Tag} from "../../UI/misc";
import {MainColor, WhiteColor} from "../../../utilities/variables";
import JsonData from "../../../JSON/TagsJsonMeetPlayer.json"
import {ITagsJson} from "../../../Interfaces";
import HomeCards from "./cards";

const Reveal = require("react-reveal/Reveal");

const MeetThePlayer: React.FC = () => {
    const [show,changeShow] = useState<boolean>(false);
    function listTags(data: Array<ITagsJson>): Array<JSX.Element> {
        return (data.map((item: ITagsJson, index: number) => {
            return (
                <Tag bck={item.bck} size={item.size} color={item.color} linkTo="" add={{...item.add}} key={index}>
                    {item.content}
                </Tag>
            )
        }));
    }

    console.log(Reveal);
    return (
        <Reveal
        onReveal={()=> {changeShow(true);} }
        fraction={0.7}
        >
        <div className="home_meetplayers"
             style={{background: `#ffffff url(${Stripes})`}}
        >
            <div className="container">
                <div className="home_meetplayers_wrapper">
                    <div className="home_card_wrapper">
                       <HomeCards
                       show={show}
                       />
                    </div>
                    <div className="home_text_wrapper">
                        <div>
                            {
                                listTags(JsonData)
                            }
                        </div>
                        <div>
                            <Tag bck={WhiteColor} size="27px" color={MainColor} linkTo="/the_team" link={true}
                                 add={{pointer: "cursor", fontWeight: 500}}>
                                Meet them here
                            </Tag>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Reveal>
    );
};

export default MeetThePlayer;