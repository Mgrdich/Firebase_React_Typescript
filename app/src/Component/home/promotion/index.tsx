import React from 'react';
import {WhiteColor} from "../../../utilities/variables";
import AnimationPromotion from "./animation";

const Promotion:React.FC = () => {
    return (
        <div className="promotion_wrapper" style={{background:`${WhiteColor}`}}>
            <div className="container">
                <AnimationPromotion/>
            </div>
        </div>
    );
};

export default Promotion;