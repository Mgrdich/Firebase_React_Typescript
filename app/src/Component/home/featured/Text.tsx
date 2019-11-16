import React from 'react';
import {easePolyOut} from "d3-ease";
import Animate from "react-move/Animate";
import FeaturedPlayer from"../../../Style/images/featured_player.png"

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
let animateFirst = function ():JSX.Element {
    return (
        <Animate
            show={true}
            start={{
                opacity: [0],
                x:503,
                y:450
            }}
            enter={{
                opacity: [1],
                x:[273],
                y:[450],
                timing: {duration: 500, ease: easePolyOut},

            }}
        >
            {({opacity,x,y}) => {
                return (
                    <div className="featured_first"
                         style={{
                             transform: `translate(${x}px,${y}px)`,
                             opacity,
                         }}
                    >
                        League
                    </div>
                );
            }}
        </Animate>
    );

};
let animateSecond = function ():JSX.Element {
    return (
        <Animate
            show={true}
            start={{
                opacity: [0],
                x:503,
                y:586
            }}
            enter={{
                opacity: [1],
                x:[273],
                y:[586],
                timing: {duration: 500, ease: easePolyOut},

            }}
        >
            {({opacity,x,y}) => {
                return (
                    <div className="featured_second"
                         style={{
                             transform: `translate(${x}px,${y}px)`,
                             opacity,
                         }}
                    >
                        Champions
                    </div>
                );
            }}
        </Animate>
    );

};
let animatePlayer = function ():JSX.Element {
    return (
        <Animate
            show={true}
            start={{
                opacity: [0],
            }}
            enter={{
                opacity: [1],
                timing: {duration: 800, ease: easePolyOut},

            }}
        >
            {({opacity}) => {
                return (
                    <div className="featured_player"
                         style={{
                             transform: `translate(550px,201px)`,
                             opacity,
                             background:`url(${FeaturedPlayer})`
                         }}
                    >
                    </div>
                );
            }}
        </Animate>
    );

};

const Text:React.FC = () => {
    return (
        <div className="featured_text">
            {animatePlayer()}
            {animateFirst()}
            {animateSecond()}
            {animateNumber()}
        </div>
    );
};

export default Text;