import React from 'react';
import Stripes from "../../../Style/images/stripes.png";
import {Tag} from "../../UI/misc";

const Index: React.FC = () => {
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
                            <Tag
                                bck="#0e1731"
                                size="90px"
                                color="#ffffff"
                                linkTo=""
                                add={{
                                    display: 'inline-block',
                                    marginBottom: '20px'
                                }}
                            >
                                Meet
                            </Tag>
                            <Tag
                                bck="#0e1731"
                                size="90px"
                                color="#ffffff"
                                linkTo=""
                                add={{
                                    display: 'inline-block',
                                    marginBottom: '20px'
                                }}
                            >
                                The
                            </Tag>
                            <Tag
                                bck="#0e1731"
                                size="90px"
                                color="#ffffff"
                                linkTo=""
                                add={{
                                    display: 'inline-block',
                                    marginBottom: '20px'
                                }}
                            >
                                Players
                            </Tag>
                        </div>
                        <div>
                            <Tag bck="#ffffff" size="27px" color="#0e1731" linkTo="/the_team" link={true} add={{pointer:"cursor"}}>
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