import React, {useState} from 'react';
import {easePolyOut} from "d3-ease";
import Animate from "react-move/Animate";
import Otamendi from "../../../Style/images/players/Otamendi.png";
import meetThePlayersArray from "../../../JSON/meetThePlayers.json"
import {IcardsAnimate} from "../../../Interfaces";
import PlayerCard from "../../UI/PlayerCard";

interface IHomeCard {
    show: boolean;
}

const HomeCards: React.FC<IHomeCard> = (props) => {
    const cardsArray: Array<IcardsAnimate> = meetThePlayersArray;

    let showAnimateCards = (arr: Array<IcardsAnimate>): Array<JSX.Element> => {
        return (
            arr.map((item: IcardsAnimate, index: number) => (
                <Animate
                    key={index}
                    show={props.show}

                    start={{
                        left: 0,
                        bottom: 0
                    }}

                    enter={{
                        left: [item.left],
                        bottom: [item.bottom],
                        timing:{duration:500,ease:easePolyOut}
                    }}

                >
                    {({left, bottom}) => {
                        return (
                            <div
                            style={{
                                position:"absolute",
                                left,
                                bottom
                            }}
                            >
                            <PlayerCard
                            number="30"
                            name="Nicholos"
                            lastname="Otamendi"
                            bck={Otamendi}
                            />
                            </div>
                        );
                    }}
                </Animate>
            ))
        )
    };
    return (
        <div>
            {showAnimateCards(cardsArray)}
        </div>
    );
};

export default HomeCards;