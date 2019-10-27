import React from 'react';
import Stripes from "../../../Style/images/stripes.png";
import {Tag} from "../../UI/misc";
import {MainColor, WhiteColor} from "../../../utilities/variables";
import JsonData from "../../../JSON/TagsJsonMeetPlayer.json"

const Index: React.FC = () => {
    function listTags(data:Array<any>):Array<JSX.Element> {
        return (data.map((item:any,index:number)=>{
          return (
              <Tag bck={item.bck} size={item.size} color={item.color} linkTo="" add={{...item.add}}>
                {item.content}
            </Tag>
          )
        }));
    }

    return (
        <div className="home_meetplayers"
             style={{background: `#ffffff url(${Stripes})`}}
        >
            <div className="container">
                <div className="home_meetplayers_wrapper">
                    <div className="home_card_wrapper">
                        card
                    </div>
                    <div className="home_text_wrapper">
                        <div>
                            {
                                listTags(JsonData)
                            }
                        </div>
                        <div>
                            <Tag bck={WhiteColor} size="27px" color={MainColor} linkTo="/the_team" link={true} add={{pointer:"cursor"}}>
                                Meet them here
                            </Tag>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;