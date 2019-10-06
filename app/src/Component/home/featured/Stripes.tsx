import React from 'react';
import {easePolyOut} from "d3-ease";
import {IStripe} from "../../../Interfaces";
import StripesData from "../../../JSON/StripesJson.json"

let {default: Animate} = require("react-move/Animate");

const Stripes = () => {
    let ArrStripes: Array<IStripe> = StripesData;


    function showStripes(): Array<JSX.Element> {
        const Element: Array<JSX.Element> = ArrStripes.map((stripe: IStripe, index: number) => {

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