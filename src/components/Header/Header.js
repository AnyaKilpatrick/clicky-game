import React from "react";
import "./Header.css";
const Header = props => (
    <div className="container-fluid" id="header">
        <div className="row pt-3">
            <h1 className="col-sm-12 col-md-6 col-lg-4">Clicky Game</h1>
            <h2 className="col-sm-12 col-md-6 col-lg-4 text-center">{props.pTag}</h2>
            <h2 className="col-sm-12 col-md-12 col-lg-4 text-right">Score: {props.score} | Top Score: {props.topScore}</h2>
        </div>
    </div>
);

export default Header;