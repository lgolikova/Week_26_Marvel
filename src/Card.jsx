import React from "react";
import hero from "./HeroesData";

function Card(props) {
    return (
        <>
            <div><img src="{props.url}" /></div>
            <h2>{props.name}</h2>
            <div>Род деятельности: {props.activity}</div>
            <div>Друзья: {props.friends}</div>
            <div>Суперсила: {props.force}</div>
        </>
    );
}

export default Card;