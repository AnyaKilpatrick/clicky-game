import React, { Component } from 'react';
import logo from './logo.svg';
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
        <Jumbotron/>
        <div className="container">
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
