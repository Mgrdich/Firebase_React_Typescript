import React from 'react';
import {WhiteColor} from "../../../utilities/variables";
import AnimationPromotion from "./animation";
import Enroll from "./Enroll";

const Promotion:React.FC = () => {
    return (
        <div className="promotion_wrapper" style={{background:`${WhiteColor}`}}>
            <div className="container">
                <AnimationPromotion/>
                <Enroll/>
            </div>
        </div>
    );
};

export default Promotion;