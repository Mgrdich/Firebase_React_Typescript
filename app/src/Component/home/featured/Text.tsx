import React from 'react';
import {easePolyOut} from "d3-ease";
import Animate from "react-move/Animate";

const Text = () => {
    let animateNumber = function () {
        return (
            <Animate
                show={true}
                start={{
                    opacity: 0,
                    rotate: 0
                }}
                enter={{
                    opacity: [1],
                    rotate: [360],
                    timing: {duration: 1000, ease: easePolyOut}
                }}
            >
                  {({opacity,rotate}) => {
                    console.log(rotate);
                    return (
                        <div className="featured_number"
                        style={{
                            opacity,
                            transform:`translate{260px,170px} rotateY(${rotate})`
                        }}
                        >
                        10
                        </div>
                    );
                }}
            </Animate>
        );
    };
    return (
        <div className="featured_text">
            {animateNumber()}
        </div>
    );
};

export default Text;