import React, {useEffect, useState} from 'react';
import {firebaseMatches} from "../../../Firebase";
import {firebaseLooper} from "../../../utilities/funcions";
import ClipLoader from 'react-spinners/ClipLoader';
import MathcesBlock from "../../UI/mathces_block";

const Slide = require('react-reveal/Slide');

const Blocks = () => {
    const [matches, changeMatches] = useState<Array<any>>([]);

    useEffect(() => {
        firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
            const matches = firebaseLooper(snapshot.val());
            changeMatches(matches);
        })
    }, []);
    const showMatches = function (matches: any): JSX.Element {
        return matches.map((match: any) => {
            return (
                <Slide bottom key={match.id}>
                    <div className="item">
                        <div className="wrapper">
                            <MathcesBlock match={match}/>
                        </div>
                    </div>
                </Slide>
            );

        });
    };
    return (
        <div className="home_matches">
            {(matches.length) ? showMatches(matches) : <ClipLoader color="#0d1831" size={150} sizeUnit="px"/>}
        </div>
    );
};

export default Blocks;