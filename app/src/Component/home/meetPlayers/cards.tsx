import React, {useState} from 'react';
import {easePolyOut} from "d3-ease";
import Animate from "react-move/Animate";
import Otamendi from "../../../Style/images/players/Otamendi.png";
import meetThePlayersArray from "../../../JSON/meetThePlayers.json"
import {IcardsAnimate} from "../../../Interfaces";

interface IHomeCard {
    show:boolean;
}

const HomeCards:React.FC<IHomeCard> = (props) => {
    const [show,changeShow] = useState<boolean>(props.show);
    const cardsArray:Array<IcardsAnimate> =meetThePlayersArray;

    let showAnimateCards =  (arr:Array<IcardsAnimate>):Array<JSX.Element> => {
    return (
        arr.map((item:IcardsAnimate,index:number)=>(
            <Animate>
                { ({})=>{
                 return (
                   <div>
                       hello
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