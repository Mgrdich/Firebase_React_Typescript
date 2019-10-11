import React, {useEffect, useState} from 'react';
import {firebaseMatches} from "../../../Firebase";
import {firebaseLooper} from "../../../utilities/funcions";
import ClipLoader from 'react-spinners/ClipLoader';

const Blocks = () => {
    const [matches, changeMatches] = useState();
    useEffect(() => {
        firebaseMatches.limitToLast(6).once('value').then((snapshot) => {
            changeMatches(firebaseLooper(snapshot));
        })
    }, []);
    const showMatches = function (): JSX.Element {
        return (
            <div>
                Match
            </div>
        );
    };

    return (
        <div>
            {(matches.length) ? showMatches() : <ClipLoader color="#0d1831" size={150} sizeUnit="px"/>}
        </div>
    );
};

export default Blocks;