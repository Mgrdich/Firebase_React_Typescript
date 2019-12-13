import React from 'react';
import {firebaseMatches} from "../../../Firebase";
import ClipLoader from 'react-spinners/ClipLoader';
import MathcesBlock from "../../UI/mathces_block";
import {useFetchFirebase} from "../../../reusableHooks/useFetchFirebase";

const Slide = require('react-reveal/Slide');

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

const Blocks = () => {
    const result = useFetchFirebase(firebaseMatches.limitToLast(6));

    return (
        <div className="home_matches">
            {(result.isLoading) ? <ClipLoader color="#0d1831" size={150} sizeUnit="px"/>:showMatches(result.data)}
        </div>
    );
};

export default Blocks;