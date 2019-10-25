import React from 'react';
import Featured from "./featured";
import MatchesHome from "./matches";
import MeetPlayer from "./meetPlayers"

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <MatchesHome/>
            <MeetPlayer/>
        </div>
    );
};

export default Home;