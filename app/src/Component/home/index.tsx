import React from 'react';
import Featured from "./featured";
import MatchesHome from "./matches";
import MeetPlayer from "./meetPlayers"
import Promotion from "./promotion";

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <MatchesHome/>
            <MeetPlayer/>
            <Promotion/>
        </div>
    );
};

export default Home;