import React from "react";

function Card(props) {
    return (
        <>
            <div><img src={props.url} alt="hero-img" /></div>
            <h2>{props.name}</h2>
            <div>Род деятельности: {props.activity}</div>
            <div>Друзья: {props.friends}</div>
            <div>Суперсила: {props.force}</div>
            <hr />
        </>
    );
}

export default Card;