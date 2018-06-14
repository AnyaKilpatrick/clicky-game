import React from "react";
import "./Game.css";

const Game = props => (
    <img className="rounded gameImgs" onClick={props.handleIncrement} alt={props.name} src={props.image}/>
);

export default Game;