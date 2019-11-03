import React from 'react';
import Jersey from "../../../Style/images/jersey.jpg"
const Zoom = require("react-reveal/Zoom");

const AnimationPromotion = () => {
    return (


        <div className="promotion_animation">
            <div className="left">

                <Zoom>
                    <div>
                        <span>Win a</span>
                        <span>Jersey</span>
                    </div>
                </Zoom>

            </div>
            <div className="right">

                <Zoom>
                    <div style={{background:`url(${Jersey}) no-repeat`}}></div>
                </Zoom>

            </div>
        </div>


    );
};

export default AnimationPromotion;