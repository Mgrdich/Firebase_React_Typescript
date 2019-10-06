import React, {useEffect, useState} from 'react';
import {easePolyOut} from "d3-ease";
import {IStripe} from "../../../Interfaces";
import StripesData from "../../../JSON/StripesJson.json"

let {default: Animate} = require("react-move/Animate");

const Stripes = () => {
    let ArrStripes:Array<IStripe> = StripesData;
    let [stripes,ChangeStripes] = useState<IStripe[]>();
    /*useEffect(() => {
        async function fetch() {
            let str = await StripesData;
            ChangeStripes(str);
        }
        fetch();
    }, []);
    */
    function showStripes(): Array<JSX.Element> {
        const Element: Array<JSX.Element> = ArrStripes.map((stripe: IStripe, index: number) => {
            return (
                <Animate
                    key={index}
                    show={true}
                    start={{
                        background: '#ffffff',
                        opacity: 0,
                        left: 0,
                        rotate: 0,
                        top: 0
                    }}
                    enter={{
                        background: [stripe.background],
                        timing: {delay: stripe.delay, duration: 200, ease: easePolyOut},
                        opacity: [1],
                        left: [stripe.left],
                        rotate: [stripe.rotate],
                        top:[stripe.top]
                    }}>
                    {({ opacity,left,rotate,top,background}:any)=>{
                        return(
                            <div
                                className="stripe"
                                style={{
                                    background,
                                    opacity,
                                    transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`
                                }}
                            />
                        );
                    }}
                </Animate>
            );
        });
        return Element;
    }


    return (
        <div className="featured_stripes">
            {showStripes()}
        </div>
    );
};

export default Stripes;