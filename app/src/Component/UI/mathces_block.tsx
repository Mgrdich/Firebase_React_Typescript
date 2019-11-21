import React from 'react';
import Matc from "../../images/team_icons/arsenal.png";
import {IMathches} from "../../Interfaces";


const MathcesBlock: React.FC<IMathches> = ({match}) => {
    console.log(Matc);
    return (
        <div className="match_block">
            <div className="match_date">
                {
                    match.final ? match.date : `Match is not played yet: ${match.date}`
                }
            </div>
            <div className="match_wrapper">
                <div className="match_top">
                    <div className="left">
                        <div className={`icon team_${match.local.toLowerCase()}`}></div>
                        <div className="team_name">{match.local}</div>
                    </div>
                    <div className="right">
                        {match.final ? match.resultLocal : '-'}
                    </div>
                </div>

                <div className="match_bottom">
                    <div className="left">
                        <div className="icon" style={{
                            background: `url(${Matc})  no-repeat center center`
                        }}>
                        </div>
                        <div className="team_name">{match.away}</div>
                    </div>
                    <div className="right">
                        {match.final ? match.resultLocal : '-'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MathcesBlock;