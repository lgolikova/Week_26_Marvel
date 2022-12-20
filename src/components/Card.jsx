import React from "react";

function Card(props) {
    return (
        <>
            <br />
            <br />
            <div><img src={props.url} alt="hero-img" /></div>
            <h2>{props.name}</h2>
            <div>Род деятельности: {props.activity}</div>
            <div>Друзья: {props.friends}</div>
            <div>Суперсила: {props.force}</div>
            <br />
            <br />
            <hr />
        </>
    );
}

export default Card;