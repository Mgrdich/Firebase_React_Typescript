import React from 'react';
import {easePolyOut} from "d3-ease";
import {IStripe} from "../../../Interfaces";
import StripesData from "../../../JSON/StripesJson.json"
import Animate from "react-move/Animate";

function showStripes(ArrStripes:Array<IStripe>): Array<JSX.Element> {
    const Element: Array<JSX.Element> = ArrStripes.map((stripe: IStripe, index: number) => {
        return (
            <Animate
                key={index}
                show={true}
                start={{
                    backgroundColor: [stripe.background],
                    opacity: 0,
                    left: 0,
                    rotate: 0,
                    top: 0
                }}
                enter={{
                    backgroundColor: [stripe.background],
                    timing: {delay: stripe.delay, duration: 200, ease: easePolyOut},
                    opacity: [1],
                    left: [stripe.left],
                    rotate: [stripe.rotate],
                    top:[stripe.top]
                }}>
                {({backgroundColor,opacity,left,rotate,top}:any)=>{
                    return(
                        <div
                            className="stripe"
                            style={{
                                backgroundColor,
                                opacity,
                                transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`,
                            }}
                        />
                    );
                }}
            </Animate>
        );
    });
    return Element;
}

const Stripes = () => {
    return (
        <div className="featured_stripes">
            {showStripes(StripesData)}
        </div>
    );
};

export default Stripes;