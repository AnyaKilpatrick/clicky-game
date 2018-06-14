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

  
  shuffleArray =()=>{ // Randomize array element order in-place. Using Durstenfeld shuffle algorithm.
    let tempArr = this.state.imgArr;
    for (let i =  tempArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = tempArr[i];
        tempArr[i] = tempArr[j];
        tempArr[j] = temp;
    }
    this.setState({imgArr:tempArr});
  }

  
  handleIncrement =(event)=>{ // updating score and topScore every time we click image
    const targetIndex = event.target.id;//grab target's id

    if(this.state.imgArr[targetIndex].clicked === false){ //if this image wasn't clicjed before
      const newScore = this.state.score + 1;
      // increment score by 1 each time you click on image
      this.setState({score: newScore});
      // if score is higher then topScore then update topScore
      if(newScore > this.state.topScore){
        this.setState({topScore:newScore});
      }
      
      this.clickedImage(targetIndex); //passing id as an arument to the next function
    }else{ //if this image was clicked before
      alert("Oops");
      this.setState({score:0});//set score back to 0

      const tempArr = this.state.imgArr;
      for(let i=0; i<tempArr.length;i++){
        tempArr[i].clicked = false;
      }
      this.setState({imgArr: tempArr}); //setting all images' property "clicked" back to false;

      console.log(JSON.stringify(this.state.imgArr));
      this.shuffleArray();
    }
    
  }

  
  clickedImage = (target) => { //update img (set "clikced" to true)
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
