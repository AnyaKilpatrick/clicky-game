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
    imgArr: Imgs,
    score:0,
    topScore:0
  };

  // Randomize array element order in-place.
  // Using Durstenfeld shuffle algorithm.
  shuffleArray =()=>{
    let tempArr = this.state.imgArr;
    for (let i =  tempArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = tempArr[i];
        tempArr[i] = tempArr[j];
        tempArr[j] = temp;
    }
    this.setState({imgArr:tempArr});
  }

  // updating score and topScore every time we click image
  handleIncrement =(event)=>{
    const newScore = this.state.score + 1;
    // increment score by 1 each time you click on image
    this.setState({score: newScore});
    // if score is higher then topScore then update topScore
    if(newScore > this.state.topScore){
      this.setState({topScore:newScore});
    }
    const target = event.target.id;//before shuffling we grab target's id
    this.clickedImage(target); //passing id as an arument to the next function
  }

  //update img (set "clikced" to true)
  clickedImage = (target) => {
    const tempArr = this.state.imgArr;
    tempArr[target].clicked = true; //setting target's property "clicked" to true;
    this.setState({imgArr: tempArr}); //updating imgArr

    // shuffle array
    this.shuffleArray();
  }



  render(){
    return (
      <Wrapper>
        <Header
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <Jumbotron/>
        <div className="container" id="game">
          <div className="row justify-content-center">
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p> 
          </div>
          <div className="row justify-content-center">
            {this.state.imgArr.map((oneImg, index)=>
              <Game
                key={index}
                index={index}
                name={oneImg.name}
                image={"./images/"+oneImg.image}
                handleIncrement={this.handleIncrement}
              />
            )}
          </div>
        </div>
      </Wrapper>
    )
  };

};

export default App;
