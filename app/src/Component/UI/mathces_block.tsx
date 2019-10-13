import React from 'react';


const MathcesBlock = (props: any) => {
    const {match} = props;
    console.log(match);
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
                        <div className="icon" style={{
                            background: `url(../../Style/images/team_icons/${match.localThmb}.png)`
                        }}>
                        </div>
                        <div className="team_name">{match.local}</div>
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