import React, {useState} from 'react';
import {easePolyOut} from "d3-ease";
import {IStripe} from "../../../Interfaces";
import StripesData from "../../../JSON/StripesJson.json"

let {default: Animate} = require("react-move/Animate");

console.log(Animate);
const Stripes = () => {
    let ArrStripes: Array<IStripe> = StripesData;


    function showStripes(): any {
        ArrStripes.map((stripe: IStripe, index: number) => {
            console.log(stripe);
            return (
                <Animate
                    key={index}
                    show={true}
                    start={{
                        background: '#ffffff'
                    }}
                    enter={{
                        background: [stripe.background]
                    }}>
                    {
                        ({background}: IStripe) => {
                            console.log(background);
                            return (
                                <div
                                    className="stripe"
                                    style={{
                                        background
                                    }}
                                >

                                </div>
                            )

                        }
                    }
                </Animate>
            );
        })
    }
    
    return (
        <div className="featured_stripes">
            {showStripes()}
        </div>
    );
};

export default Stripes;