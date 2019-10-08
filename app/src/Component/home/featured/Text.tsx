import React from 'react';
import {easePolyOut} from "d3-ease";
import Animate from "react-move/Animate";

const Text:React.FC = () => {
    let animateNumber = function ():JSX.Element {
        return (
            <Animate
                show={true}
                start={{
                    opacity: [0],
                    rotate:  0
                }}
                enter={{
                    opacity: [1],
                    rotate: [360],
                    timing: {duration: 1000, ease: easePolyOut}
                }}
            >
                  {({opacity,rotate}) => {
                    return (
                        <div className="featured_number"
                        style={{
                            transform: `translate(260px,170px) rotateY(${rotate}deg)`,
                            opacity,
                        }}
                        >
                        3
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