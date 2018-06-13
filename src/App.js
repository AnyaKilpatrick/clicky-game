import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Game from "./components/Game";
import Imgs from "./images.json";
import './App.css';



class App extends React.Component {

  state = {
    imgArr: Imgs
  };

  render(){
    return (
      <Wrapper>
        <Header/>
        <Jumbotron/>
        <div className="container" id="game">
          <div className="row justify-content-center">
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p> 
          </div>
          <div className="row justify-content-center">
            {this.state.imgArr.map((oneImg, index)=>
              <Game
                key={index}
                name={oneImg.name}
                image={"./images/"+oneImg.image}
              />
            )}
          </div>
        </div>
      </Wrapper>
    )
  };

};

export default App;
