import React from "react";
import "./Game.css";

const Game = props => (
    <img className="rounded gameImgs" alt={props.name} src={props.image}/>
);

export default Game;