import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron text-center" id="jumbotron">
        <a id="start" className="btn btn-outline-warning" href="#game" role="button">Play</a>
        {/* <button id="start" type="button" href="#game" class="btn btn-info">Start</button> */}
        {/* <button id="start" className="col-s2 text-center"><a  href="#game">start</a></button> */}
        <img className="img-fluid" alt="logo" src="./images/nickelodeon.png"/>
        {/* <p className="lead">Click on an image to earn points, but don't click on any more than once!</p> */}
    </div>
);

export default Jumbotron;