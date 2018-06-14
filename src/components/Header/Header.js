import React from "react";
import "./Header.css";
const Header = props => (
    <div className="container-fluid" id="header">
        <div className="row pt-3">
            <h1 className="col">Clicky Game</h1>
            <h2 className="col text-right">Score: {props.score} | Top Score: {props.topScore}</h2>
        </div>
    </div>
);

export default Header;